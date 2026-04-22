import { useState, useEffect, useRef } from 'react';

const TELEGRAM_BOT_TOKEN = '8306819779:AAHi4LbRyVsJeplzW1DN4EimCDLxEAzA2ww';
const TELEGRAM_CHAT_ID   = '7671368706';

// Conversation flow steps
const STEPS = [
  'start',
  'website_type',
  'design_style',
  'features',
  'budget',
  'timeline',
  'phone',
  'telegram',
  'done',
];

const STEP_QUESTIONS = {
  website_type: 'Qanday veb-sayt kerak? Masalan: biznes sayt, portfolio, onlayn do\'kon, restoran, blog, landing page?',
  design_style: 'Dizayn uslubi qanday bo\'lsin? Masalan: zamonaviy va minimalist, rang-barang, klassik, texnologik?',
  features:     'Qanday funksiyalar bo\'lishi kerak? (to\'lov tizimi, admin panel, forma, xarita, galereya, va h.k)',
  budget:       'Taxminiy byudjetingiz qancha? Masalan: $100–300 / $300–700 / $700–1500 / $1500+',
  timeline:     'Sayt qachonga tayyor bo\'lishi kerak? Masalan: 1 hafta / 2 hafta / 1 oy / shoshilmaydi',
  phone:        'Rahmat! Sizga bog\'lanishimiz uchun telefon raqamingizni yuboring (masalan: +998 90 123 45 67):',
  telegram:     'Telegram username\'ingizni kiriting (masalan: @username) — yoki "yo\'q" deb yozing:',
};

async function callAI(history) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: `Sen Hojiakbar Sobirov — professional frontend developer nomidan ishlaydigan AI yordamchisan.
Faqat O'zbek tilida gapir.
Qisqa, samimiy va professional bo'l.
Mijoz suhbat so'ngida o'z kontaktini qoldiradi va Hojiakbar u bilan bog'lanadi.
Hech qachon narx va muddatga o'zing kafolat berma — bu Hojiakbar bilan muhokama qilinadi.
Har bir javobda faqat bitta savol ber. Javoblarni 2-3 gapdan oshirma.`,
      messages: history,
    }),
  });
  const data = await res.json();
  return data.content?.[0]?.text || 'Uzr, xatolik yuz berdi. Qaytadan urinib ko\'ring.';
}

async function sendSummaryToTelegram(data) {
  const text = `🤖 AI Chat orqali yangi mijoz!\n\n` +
    `🌐 Sayt turi: ${data.website_type || '—'}\n` +
    `🎨 Dizayn: ${data.design_style || '—'}\n` +
    `⚙️ Funksiyalar: ${data.features || '—'}\n` +
    `💰 Byudjet: ${data.budget || '—'}\n` +
    `⏱ Muddat: ${data.timeline || '—'}\n\n` +
    `📱 Telefon: ${data.phone || '—'}\n` +
    `✈️ Telegram: ${data.telegram || '—'}\n\n` +
    `⏰ Vaqt: ${new Date().toLocaleString('uz-UZ')}`;

  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
  });
}

const INITIAL_MESSAGES = [
  { role: 'ai', text: 'Salom! 👋 Men Hojiakbar Sobirov\'ning AI yordamchisiman.' },
  { role: 'ai', text: 'Sizga professional veb-sayt yaratishda yordam beraman. Bir necha savol beraman — shunda Hojiakbar siz uchun eng mos variant taklif qila oladi.' },
  { role: 'ai', text: 'Boshlashga tayyormisiz? ✍️' },
];

export default function ChatWidget() {
  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput]       = useState('');
  const [step, setStep]         = useState('start');
  const [collected, setCollected] = useState({});
  const [loading, setLoading]   = useState(false);
  const [done, setDone]         = useState(false);
  const [unread, setUnread]     = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [aiHistory, setAiHistory] = useState([]);
  const bottomRef  = useRef(null);
  const inputRef   = useRef(null);

  // Show unread dot after 3s if chat not opened
  useEffect(() => {
    const t = setTimeout(() => {
      if (!open) setUnread(true);
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  // Initialize messages when opened first time
  useEffect(() => {
    if (open && !initialized) {
      setInitialized(true);
      setMessages([]);
      INITIAL_MESSAGES.forEach((msg, i) => {
        setTimeout(() => {
          setMessages((prev) => [...prev, msg]);
        }, i * 800);
      });
    }
    if (open) {
      setUnread(false);
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [open]);

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Body scroll lock on mobile when open
  useEffect(() => {
    if (open && window.innerWidth < 640) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const addMsg = (role, text) =>
    setMessages((prev) => [...prev, { role, text }]);

  const handleSend = async () => {
    const val = input.trim();
    if (!val || loading || done) return;
    setInput('');
    addMsg('user', val);
    setLoading(true);

    // Step: start → ask first real question
    if (step === 'start') {
      const nextStep = 'website_type';
      const newHistory = [
        { role: 'user', content: val },
        { role: 'user', content: `Endi quyidagi savolni samimiy tarzda ber: "${STEP_QUESTIONS[nextStep]}"` },
      ];
      try {
        const reply = await callAI(newHistory);
        setAiHistory([{ role: 'user', content: val }, { role: 'assistant', content: reply }]);
        addMsg('ai', reply);
      } catch {
        addMsg('ai', STEP_QUESTIONS[nextStep]);
      }
      setStep(nextStep);
      setLoading(false);
      return;
    }

    // Collect answer for current step
    const fieldMap = {
      website_type: 'website_type',
      design_style: 'design_style',
      features:     'features',
      budget:       'budget',
      timeline:     'timeline',
      phone:        'phone',
      telegram:     'telegram',
    };

    if (fieldMap[step]) {
      setCollected((prev) => ({ ...prev, [fieldMap[step]]: val }));
    }

    const stepIdx  = STEPS.indexOf(step);
    const nextStep = STEPS[stepIdx + 1];

    // Last step: telegram collected → send to Telegram
    if (step === 'telegram') {
      const finalData = { ...collected, telegram: val };
      try {
        await sendSummaryToTelegram(finalData);
      } catch (e) {
        console.error('Telegram error:', e);
      }
      setStep('done');
      setDone(true);
      setTimeout(() => {
        addMsg('ai', '✅ Zo\'r! Barcha ma\'lumotlar qabul qilindi. Hojiakbar tez orada siz bilan bog\'lanadi. Rahmat! 🙏');
        setLoading(false);
      }, 600);
      return;
    }

    // Next step: phone
    if (nextStep === 'phone') {
      const updHistory = [
        ...aiHistory,
        { role: 'user', content: val },
        { role: 'user', content: `Mijoz barcha loyiha ma'lumotlarini berdi. Endi kontakt ma'lumotlari so'ra. Quyidagi savolni samimiy tarzda ifodalab yoz: "${STEP_QUESTIONS.phone}"` },
      ];
      try {
        const reply = await callAI(updHistory);
        setAiHistory((h) => [...h, { role: 'user', content: val }, { role: 'assistant', content: reply }]);
        addMsg('ai', reply);
      } catch {
        addMsg('ai', STEP_QUESTIONS.phone);
      }
      setStep('phone');
      setLoading(false);
      return;
    }

    // Next step: telegram username
    if (nextStep === 'telegram') {
      setTimeout(() => {
        addMsg('ai', STEP_QUESTIONS.telegram);
        setLoading(false);
      }, 500);
      setStep('telegram');
      return;
    }

    // General next steps
    if (nextStep && STEP_QUESTIONS[nextStep]) {
      const updHistory = [
        ...aiHistory,
        { role: 'user', content: val },
        { role: 'user', content: `Quyidagi savolni natural, qisqa va samimiy tarzda ifodalab ber: "${STEP_QUESTIONS[nextStep]}"` },
      ];
      try {
        const reply = await callAI(updHistory);
        setAiHistory((h) => [...h, { role: 'user', content: val }, { role: 'assistant', content: reply }]);
        addMsg('ai', reply);
      } catch {
        addMsg('ai', STEP_QUESTIONS[nextStep]);
      }
      setStep(nextStep);
    }

    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <style>{`
        /* ─── FAB ─────────────────────────────────────────────────── */
        .chat-fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9000;
          width: 54px;
          height: 54px;
          background: #0a0a0a;
          color: #fff;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.25);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .chat-fab:hover {
          transform: scale(1.07);
          box-shadow: 0 6px 28px rgba(0,0,0,0.3);
        }

        .chat-fab:active { transform: scale(0.96); }

        .chat-unread-dot {
          position: absolute;
          top: 9px;
          right: 9px;
          width: 10px;
          height: 10px;
          background: #ef4444;
          border: 2px solid #fff;
          border-radius: 50%;
          animation: pulseDot 1.5s infinite;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.7; transform: scale(1.15); }
        }

        /* ─── PANEL ───────────────────────────────────────────────── */
        .chat-panel {
          position: fixed;
          bottom: 88px;
          right: 24px;
          z-index: 8999;
          width: min(380px, calc(100vw - 32px));
          height: min(540px, calc(100svh - 120px));
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 48px rgba(0,0,0,0.16);
          border: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: chatSlideUp 0.25s cubic-bezier(0.4,0,0.2,1);
        }

        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Full-screen on very small phones */
        @media (max-width: 420px) {
          .chat-panel {
            inset: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            border-radius: 0;
          }
          .chat-fab {
            bottom: 16px;
            right: 16px;
          }
        }

        /* ─── HEADER ──────────────────────────────────────────────── */
        .chat-header {
          padding: 14px 16px;
          border-bottom: 1px solid #f3f4f6;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          background: #fff;
        }

        .chat-avatar {
          width: 38px;
          height: 38px;
          background: #0a0a0a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 15px;
          color: #fff;
          flex-shrink: 0;
        }

        .chat-header-info {
          flex: 1;
        }

        .chat-header-name {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #0a0a0a;
          line-height: 1.2;
        }

        .chat-header-status {
          font-size: 12px;
          color: #9ca3af;
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 1px;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          flex-shrink: 0;
          animation: pulseDot 2s infinite;
        }

        .chat-close-btn {
          width: 32px;
          height: 32px;
          background: none;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          color: #9ca3af;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, color 0.2s;
          flex-shrink: 0;
        }

        .chat-close-btn:hover {
          background: #f3f4f6;
          color: #111;
        }

        /* ─── MESSAGES ────────────────────────────────────────────── */
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          scroll-behavior: smooth;
        }

        .chat-messages::-webkit-scrollbar {
          width: 4px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: transparent;
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 4px;
        }

        /* Bubble */
        .chat-bubble-wrap {
          display: flex;
        }

        .chat-bubble-wrap.user {
          justify-content: flex-end;
        }

        .chat-bubble-wrap.ai {
          justify-content: flex-start;
        }

        .chat-bubble {
          max-width: 82%;
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 14px;
          line-height: 1.55;
          word-break: break-word;
        }

        .chat-bubble-wrap.user .chat-bubble {
          background: #0a0a0a;
          color: #fff;
          border-radius: 16px 16px 4px 16px;
        }

        .chat-bubble-wrap.ai .chat-bubble {
          background: #f3f4f6;
          color: #111;
          border-radius: 16px 16px 16px 4px;
        }

        /* Typing indicator */
        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 12px 16px;
          background: #f3f4f6;
          border-radius: 16px 16px 16px 4px;
          width: fit-content;
        }

        .typing-dot {
          width: 7px;
          height: 7px;
          background: #9ca3af;
          border-radius: 50%;
          animation: typingBounce 1.2s infinite;
        }

        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typingBounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50%       { transform: translateY(-5px); opacity: 1; }
        }

        /* ─── INPUT ───────────────────────────────────────────────── */
        .chat-input-area {
          padding: 12px;
          border-top: 1px solid #f3f4f6;
          display: flex;
          gap: 8px;
          align-items: flex-end;
          flex-shrink: 0;
          background: #fff;
        }

        .chat-input {
          flex: 1;
          padding: 10px 14px;
          background: #f9fafb;
          border: 1.5px solid #e5e7eb;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #111;
          outline: none;
          resize: none;
          max-height: 100px;
          line-height: 1.5;
          transition: border-color 0.2s;
        }

        .chat-input:focus {
          border-color: #9ca3af;
        }

        .chat-input::placeholder {
          color: #d1d5db;
        }

        .chat-send-btn {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          background: #0a0a0a;
          color: #fff;
          border: none;
          border-radius: 11px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, transform 0.15s;
        }

        .chat-send-btn:hover:not(:disabled) {
          background: #1f2937;
        }

        .chat-send-btn:active:not(:disabled) {
          transform: scale(0.95);
        }

        .chat-send-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        /* Done state */
        .chat-done-bar {
          padding: 14px 16px;
          border-top: 1px solid #f3f4f6;
          text-align: center;
          font-size: 13px;
          color: #9ca3af;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          flex-shrink: 0;
        }

        /* Tooltip on FAB */
        .chat-fab-tooltip {
          position: absolute;
          right: 62px;
          top: 50%;
          transform: translateY(-50%);
          background: #0a0a0a;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 8px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .chat-fab:hover .chat-fab-tooltip {
          opacity: 1;
        }

        @media (max-width: 480px) {
          .chat-fab-tooltip { display: none; }
        }
      `}</style>

      {/* ── FAB ─────────────────────────────────────── */}
      <button
        className="chat-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat ochish"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
        {unread && !open && <span className="chat-unread-dot" />}
        <span className="chat-fab-tooltip">Biz bilan gaplashing</span>
      </button>

      {/* ── CHAT PANEL ──────────────────────────────── */}
      {open && (
        <div className="chat-panel">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-avatar">H</div>
            <div className="chat-header-info">
              <div className="chat-header-name">Hojiakbar Sobirov</div>
              <div className="chat-header-status">
                <span className="status-dot" />
                AI yordamchi • Doim onlayn
              </div>
            </div>
            <button className="chat-close-btn" onClick={() => setOpen(false)} aria-label="Yopish">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble-wrap ${msg.role}`}>
                <div className="chat-bubble">{msg.text}</div>
              </div>
            ))}
            {loading && (
              <div className="chat-bubble-wrap ai">
                <div className="typing-indicator">
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input or Done */}
          {!done ? (
            <div className="chat-input-area">
              <textarea
                ref={inputRef}
                className="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Xabar yozing..."
                disabled={loading}
                rows={1}
              />
              <button
                className="chat-send-btn"
                onClick={handleSend}
                disabled={loading || !input.trim()}
                aria-label="Yuborish"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="chat-done-bar">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Suhbat yakunlandi — tez orada bog'lanamiz!
            </div>
          )}
        </div>
      )}
    </>
  );
}
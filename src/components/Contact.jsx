import { useState, useRef, useEffect } from 'react';

const TELEGRAM_BOT_TOKEN = '8306819779:AAHi4LbRyVsJeplzW1DN4EimCDLxEAzA2ww';
const TELEGRAM_CHAT_ID   = '7671368706';

async function sendToTelegram(data) {
  const text = `📬 Yangi xabar (Contact forma)!\n\n👤 Ism: ${data.name}\n📧 Email: ${data.email}\n💬 Xabar:\n${data.message}\n\n⏰ ${new Date().toLocaleString('uz-UZ')}`;
  const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(json.description);
}

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [status, setStatus]   = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-item').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setStatus(null);
    try {
      await sendToTelegram(form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const SOCIALS = [
    {
      label: 'Email',
      value: 'hojiakbarsobirov30@gmail.com',
      href: 'mailto:hojiakbarsobirov30@gmail.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      value: '@hojiakbarsobirov',
      href: 'https://github.com/hojiakbarsobirov',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: 'Telegram',
      value: '@sobrvkh',
      href: 'https://t.me/sobrvkh',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      value: '@sobrvkh',
      href: 'https://instagram.com/sobrvkh',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        .contact-section {
          padding: clamp(72px, 10vw, 120px) clamp(20px, 5vw, 48px);
          background: #fff;
        }

        .contact-inner {
          max-width: 1080px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: clamp(32px, 6vw, 64px);
          align-items: start;
        }

        /* Left info */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 14px;
        }

        .section-label::before {
          content: '';
          display: block;
          width: 24px;
          height: 2px;
          background: #d1d5db;
          border-radius: 2px;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #0a0a0a;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .contact-text {
          font-size: clamp(14px, 1.8vw, 16px);
          color: #6b7280;
          line-height: 1.75;
        }

        /* Socials */
        .socials-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          text-decoration: none;
          color: inherit;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }

        .social-link:hover {
          border-color: #9ca3af;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transform: translateY(-1px);
        }

        .social-icon {
          width: 40px;
          height: 40px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #374151;
          flex-shrink: 0;
          transition: background 0.2s, color 0.2s;
        }

        .social-link:hover .social-icon {
          background: #0a0a0a;
          color: #fff;
          border-color: #0a0a0a;
        }

        .social-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9ca3af;
          line-height: 1;
          margin-bottom: 2px;
        }

        .social-value {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
        }

        /* Form */
        .contact-form-box {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          padding: clamp(24px, 4vw, 40px);
        }

        .contact-form-box h3 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(18px, 2.5vw, 22px);
          font-weight: 700;
          color: #0a0a0a;
          margin-bottom: 6px;
        }

        .form-note {
          font-size: 14px;
          color: #9ca3af;
          margin-bottom: 28px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 6px;
          letter-spacing: 0.02em;
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 12px 16px;
          background: #fff;
          border: 1.5px solid #e5e7eb;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: #111;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          resize: none;
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: #d1d5db;
        }

        .form-input:focus, .form-textarea:focus {
          border-color: #0a0a0a;
          box-shadow: 0 0 0 3px rgba(10,10,10,0.06);
        }

        .form-textarea {
          min-height: 130px;
          line-height: 1.6;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: #0a0a0a;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.2s, transform 0.15s;
          margin-top: 20px;
        }

        .submit-btn:hover:not(:disabled) {
          background: #1f2937;
        }

        .submit-btn:active:not(:disabled) {
          transform: scale(0.99);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Status messages */
        .form-status {
          margin-top: 14px;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .form-status.success {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #15803d;
        }

        .form-status.error {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
        }

        /* Spinner */
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        /* Fade animation */
        .fade-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .fade-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="contact" className="contact-section" ref={sectionRef}>
        <div className="contact-inner">
          <div className="contact-grid">

            {/* Left Info */}
            <div className="contact-info">
              <div className="fade-item">
                <p className="section-label">Bog'lanish</p>
                <h2 className="section-title">
                  Loyihangizni<br />muhokama qilaylik
                </h2>
                <p className="contact-text">
                  Yangi loyiha, hamkorlik yoki savol bormi? Xabar yozing —
                  odatda bir kun ichida javob beraman. Yoki quyidagi chat
                  orqali darhol muloqot qilishingiz mumkin.
                </p>
              </div>

              <div className="socials-list fade-item">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <div className="social-icon">{s.icon}</div>
                    <div>
                      <div className="social-label">{s.label}</div>
                      <div className="social-value">{s.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="contact-form-box fade-item">
              <h3>Xabar yuborish</h3>
              <p className="form-note">Barcha maydonlarni to'ldiring</p>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Ismingiz</label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ism Familiya"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Xabaringiz</label>
                  <textarea
                    className="form-textarea"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Loyihangiz haqida qisqacha yozing..."
                    required
                    disabled={loading}
                  />
                </div>

                <button className="submit-btn" type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner" />
                      Yuborilmoqda...
                    </>
                  ) : (
                    <>
                      Xabar yuborish
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="form-status success">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Xabaringiz muvaffaqiyatli yuborildi! Tez orada javob beraman.
                  </div>
                )}

                {status === 'error' && (
                  <div className="form-status error">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
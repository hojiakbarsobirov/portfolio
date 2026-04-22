export default function Hero({ scrollTo }) {
  return (
    <>
      <style>{`
        .hero {
          min-height: 100svh;
          display: flex;
          align-items: center;
          padding: clamp(100px, 14vw, 140px) clamp(20px, 5vw, 48px) clamp(60px, 8vw, 80px);
          position: relative;
          overflow: hidden;
          background: #ffffff;
        }

        /* Subtle grid background */
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(#e5e7eb 1px, transparent 1px),
            linear-gradient(90deg, #e5e7eb 1px, transparent 1px);
          background-size: 48px 48px;
          opacity: 0.5;
          pointer-events: none;
          z-index: 0;
        }

        /* Fade-out mask on grid */
        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 70% at 50% 100%, #ffffff 30%, transparent 100%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
        }

        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          background: #f3f4f6;
          border: 1px solid #e5e7eb;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 500;
          color: #4b5563;
          margin-bottom: 28px;
          animation: fadeIn 0.5s ease;
        }

        .hero-badge .dot {
          width: 7px;
          height: 7px;
          background: #22c55e;
          border-radius: 50%;
          flex-shrink: 0;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Main heading */
        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(44px, 9vw, 96px);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.0;
          color: #0a0a0a;
          margin-bottom: 24px;
          animation: fadeIn 0.6s ease 0.1s both;
        }

        .hero-title .name-dim {
          color: #9ca3af;
        }

        /* Role pill */
        .hero-role {
          display: inline-block;
          font-family: 'Syne', sans-serif;
          font-size: clamp(15px, 2.5vw, 20px);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #6b7280;
          border-left: 3px solid #0a0a0a;
          padding-left: 14px;
          margin-bottom: 28px;
          animation: fadeIn 0.6s ease 0.2s both;
        }

        /* Description */
        .hero-desc {
          font-size: clamp(15px, 2vw, 18px);
          color: #6b7280;
          max-width: 520px;
          line-height: 1.75;
          margin-bottom: 40px;
          animation: fadeIn 0.6s ease 0.3s both;
        }

        /* CTA buttons */
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: clamp(48px, 8vw, 72px);
          animation: fadeIn 0.6s ease 0.4s both;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: clamp(12px, 2vw, 15px) clamp(22px, 3vw, 32px);
          background: #0a0a0a;
          color: #ffffff;
          border: 2px solid #0a0a0a;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
          text-decoration: none;
        }

        .hero-btn-primary:hover {
          background: #1f2937;
          border-color: #1f2937;
        }

        .hero-btn-primary:active { transform: scale(0.98); }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: clamp(12px, 2vw, 15px) clamp(22px, 3vw, 32px);
          background: transparent;
          color: #0a0a0a;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          font-weight: 600;
          cursor: pointer;
          transition: border-color 0.2s, transform 0.15s;
          text-decoration: none;
          white-space: nowrap;
        }

        .hero-btn-secondary:hover { border-color: #0a0a0a; }
        .hero-btn-secondary:active { transform: scale(0.98); }

        /* Stats row */
        .hero-stats {
          display: flex;
          gap: clamp(28px, 6vw, 64px);
          flex-wrap: wrap;
          animation: fadeIn 0.6s ease 0.5s both;
        }

        .hero-stat-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .hero-stat-number {
          font-family: 'Syne', sans-serif;
          font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #0a0a0a;
          line-height: 1;
        }

        .hero-stat-label {
          font-size: 13px;
          font-weight: 500;
          color: #9ca3af;
          letter-spacing: 0.02em;
        }

        .hero-stat-divider {
          width: 1px;
          background: #e5e7eb;
          align-self: stretch;
          display: block;
        }

        /* Arrow icon */
        .arrow-icon {
          width: 18px;
          height: 18px;
          transition: transform 0.2s;
        }

        .hero-btn-primary:hover .arrow-icon {
          transform: translateX(4px);
        }

        /* Scroll hint */
        .scroll-hint {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          animation: fadeIn 1s ease 1s both;
        }

        .scroll-hint span {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9ca3af;
        }

        .scroll-mouse {
          width: 22px;
          height: 34px;
          border: 2px solid #d1d5db;
          border-radius: 11px;
          display: flex;
          justify-content: center;
          padding-top: 6px;
        }

        .scroll-wheel {
          width: 3px;
          height: 6px;
          background: #9ca3af;
          border-radius: 2px;
          animation: scrollDown 1.5s infinite;
        }

        @keyframes scrollDown {
          0%   { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(8px); opacity: 0; }
        }

        /* Mobile tweaks */
        @media (max-width: 480px) {
          .hero-actions {
            flex-direction: column;
          }
          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100%;
            justify-content: center;
          }
          .hero-stat-divider { display: none; }
          .scroll-hint { display: none; }
        }
      `}</style>

      <section id="home" className="hero">
        <div className="hero-inner">
          {/* Badge */}
          <div className="hero-badge">
            <span className="dot" />
            Toshkent, O'zbekiston · Frontend Developer
          </div>

          {/* Title */}
          <h1 className="hero-title">
            Hojiakbar<br />
            <span className="name-dim">Sobirov</span>
          </h1>

          {/* Role */}
          <p className="hero-role">Front-end Developer</p>

          {/* Description */}
          <p className="hero-desc">
            Zamonaviy va sifatli veb-saytlar yarataman. Sizning g'oyangizni
            professional darajada, tez va chiroyli amalga oshiraman.
          </p>

          {/* Actions */}
          <div className="hero-actions">
            <button
              className="hero-btn-primary"
              onClick={() => scrollTo && scrollTo('contact')}
            >
              Loyiha muhokamasi
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            <a
              className="hero-btn-secondary"
              href="https://docs.google.com/document/d/1u7rGiRmLRNe6b34kODK-dLLr0U-wGjPykQF3qKfD6zU/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV Ko'rish
              <svg style={{ width: 16, height: 16 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="hero-stat-item">
              <span className="hero-stat-number">5+</span>
              <span className="hero-stat-label">Loyihalar</span>
            </div>
            <span className="hero-stat-divider" />
            <div className="hero-stat-item">
              <span className="hero-stat-number">1+</span>
              <span className="hero-stat-label">Yil tajriba</span>
            </div>
            <span className="hero-stat-divider" />
            <div className="hero-stat-item">
              <span className="hero-stat-number">95%</span>
              <span className="hero-stat-label">Mijoz mamnuniyati</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>Pastga</span>
        </div>
      </section>
    </>
  );
}
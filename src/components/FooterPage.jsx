export default function Footer({ scrollTo }) {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer {
          background: #0a0a0a;
          color: #fff;
          padding: clamp(40px, 6vw, 64px) clamp(20px, 5vw, 48px) clamp(24px, 4vw, 40px);
        }

        .footer-inner {
          max-width: 1080px;
          margin: 0 auto;
        }

        .footer-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: clamp(24px, 4vw, 48px);
          padding-bottom: clamp(28px, 4vw, 48px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          flex-wrap: wrap;
        }

        .footer-brand {
          flex: 1;
          min-width: 220px;
        }

        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-size: clamp(20px, 3vw, 26px);
          font-weight: 800;
          letter-spacing: 0.04em;
          margin-bottom: 10px;
          color: #fff;
        }

        .footer-logo span {
          color: #4b5563;
        }

        .footer-tagline {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.65;
          max-width: 280px;
        }

        .footer-nav {
          display: flex;
          gap: clamp(32px, 5vw, 64px);
          flex-wrap: wrap;
        }

        .footer-nav-group h4 {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #4b5563;
          margin-bottom: 14px;
        }

        .footer-nav-group ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
          list-style: none;
          padding: 0; margin: 0;
        }

        .footer-nav-group li button,
        .footer-nav-group li a {
          background: none;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #9ca3af;
          cursor: pointer;
          padding: 0;
          text-decoration: none;
          transition: color 0.2s;
          display: block;
        }

        .footer-nav-group li button:hover,
        .footer-nav-group li a:hover {
          color: #fff;
        }

        /* Bottom row */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding-top: clamp(20px, 3vw, 32px);
          flex-wrap: wrap;
        }

        .footer-copy {
          font-size: 13px;
          color: #4b5563;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-social-link {
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }

        .footer-social-link:hover {
          background: rgba(255,255,255,0.12);
          color: #fff;
          border-color: rgba(255,255,255,0.2);
        }

        .footer-made {
          font-size: 13px;
          color: #374151;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Mobile */
        @media (max-width: 640px) {
          .footer-top {
            flex-direction: column;
          }
          .footer-bottom {
            flex-direction: column-reverse;
            align-items: flex-start;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                HOJIAKBAR<span>.</span>DEV
              </div>
              <p className="footer-tagline">
                Zamonaviy veb-saytlar va ilovalar yaratuvchi
                frontend developer.
              </p>
            </div>

            {/* Nav groups */}
            <div className="footer-nav">
              <div className="footer-nav-group">
                <h4>Navigatsiya</h4>
                <ul>
                  {['home', 'about', 'skills', 'projects', 'contact'].map((s) => (
                    <li key={s}>
                      <button onClick={() => scrollTo(s)}>
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-nav-group">
                <h4>Aloqa</h4>
                <ul>
                  <li><a href="mailto:hojiakbarsobirov30@gmail.com">Email</a></li>
                  <li><a href="https://github.com/hojiakbarsobirov" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  <li><a href="https://t.me/sobrvkh" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                  <li><a href="https://instagram.com/sobrvkh" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            <p className="footer-copy">
              © {year} Hojiakbar Sobirov. Barcha huquqlar himoyalangan.
            </p>

            <div className="footer-socials">
              {/* GitHub */}
              <a href="https://github.com/hojiakbarsobirov" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* Telegram */}
              <a href="https://t.me/sobrvkh" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Telegram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/sobrvkh" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>

            <p className="footer-made">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#4b5563">
                <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
              </svg>
              Hojiakbar Sobirov tomonidan yaratildi
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
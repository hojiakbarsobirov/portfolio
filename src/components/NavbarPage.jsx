import { useState, useEffect } from 'react';

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export default function Navbar({ activeSection, scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (scrollTo) {
      scrollTo(id);
    }
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 900;
          height: 68px;
          display: flex;
          align-items: center;
          background: ${scrolled ? 'rgba(255,255,255,0.96)' : 'transparent'};
          backdrop-filter: ${scrolled ? 'blur(14px)' : 'none'};
          border-bottom: ${scrolled ? '1px solid #e5e7eb' : '1px solid transparent'};
          transition: background 0.3s, border-color 0.3s;
        }

        .navbar-inner {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 clamp(20px, 5vw, 48px);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 17px;
          letter-spacing: 0.04em;
          color: #0a0a0a;
          cursor: pointer;
          user-select: none;
          white-space: nowrap;
          z-index: 1001;
          position: relative;
        }

        .navbar-logo span {
          color: #9ca3af;
        }

        /* Desktop links */
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nav-link {
          background: none;
          border: none;
          padding: 8px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #6b7280;
          border-radius: 8px;
          cursor: pointer;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
          position: relative;
        }

        .nav-link.active {
          color: #0a0a0a;
          font-weight: 600;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 2px;
          background: #0a0a0a;
          border-radius: 2px;
        }

        .nav-link:hover:not(.active) {
          color: #111827;
          background: #f3f4f6;
        }

        /* CTA button */
        .navbar-cta {
          margin-left: 8px;
          padding: 10px 20px;
          background: #0a0a0a;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .navbar-cta:hover {
          background: #374151;
        }

        /* Hamburger button */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          padding: 8px;
          background: none;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s;
          position: relative;
          z-index: 1001;
        }

        .hamburger:hover {
          background: #f3f4f6;
        }

        .hamburger span {
          display: block;
          height: 2px;
          background: #0a0a0a;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* =====================
           MOBILE MENU — SIDEBAR
        ======================== */

        /* Dark overlay backdrop */
        .mobile-overlay {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 940;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(2px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .mobile-overlay.open {
          display: block;
          opacity: 1;
        }

        /* Side drawer */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 950;
          width: 70%;
          max-width: 360px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          padding: 0;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: -8px 0 40px rgba(0, 0, 0, 0.12);
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        /* Drawer header */
        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid #f3f4f6;
          height: 68px;
        }

        .mobile-menu-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 15px;
          letter-spacing: 0.04em;
          color: #0a0a0a;
        }

        .mobile-menu-logo span {
          color: #9ca3af;
        }

        .mobile-close {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f3f4f6;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          color: #6b7280;
          transition: background 0.2s, color 0.2s;
        }

        .mobile-close:hover {
          background: #e5e7eb;
          color: #0a0a0a;
        }

        /* Nav links inside drawer */
        .mobile-menu-links {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 16px 16px 0;
          gap: 4px;
          overflow-y: auto;
        }

        .mobile-nav-link {
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          padding: 14px 16px;
          font-family: 'Syne', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #6b7280;
          cursor: pointer;
          border-radius: 10px;
          transition: color 0.2s, background 0.2s;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mobile-nav-link .nav-number {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: #d1d5db;
          letter-spacing: 0.05em;
        }

        .mobile-nav-link.active {
          color: #0a0a0a;
          background: #f9fafb;
        }

        .mobile-nav-link.active .nav-number {
          color: #9ca3af;
        }

        .mobile-nav-link:hover {
          color: #0a0a0a;
          background: #f3f4f6;
        }

        /* Active indicator bar */
        .mobile-nav-link.active {
          position: relative;
        }

        .mobile-nav-link.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 60%;
          background: #0a0a0a;
          border-radius: 0 2px 2px 0;
        }

        /* Drawer footer */
        .mobile-menu-footer {
          padding: 20px 16px 32px;
          border-top: 1px solid #f3f4f6;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-footer-cta {
          display: block;
          text-align: center;
          padding: 15px;
          background: #0a0a0a;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
          text-decoration: none;
        }

        .mobile-footer-cta:hover {
          background: #374151;
        }

        .mobile-footer-email {
          display: block;
          text-align: center;
          padding: 12px;
          color: #9ca3af;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
          border-radius: 8px;
          word-break: break-all;
        }

        .mobile-footer-email:hover {
          color: #0a0a0a;
          background: #f3f4f6;
        }

        /* Staggered animation for menu items */
        .mobile-menu.open .mobile-nav-link:nth-child(1) { animation: slideInRight 0.3s ease 0.05s both; }
        .mobile-menu.open .mobile-nav-link:nth-child(2) { animation: slideInRight 0.3s ease 0.10s both; }
        .mobile-menu.open .mobile-nav-link:nth-child(3) { animation: slideInRight 0.3s ease 0.15s both; }
        .mobile-menu.open .mobile-nav-link:nth-child(4) { animation: slideInRight 0.3s ease 0.20s both; }
        .mobile-menu.open .mobile-nav-link:nth-child(5) { animation: slideInRight 0.3s ease 0.25s both; }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* Responsive */
        @media (min-width: 769px) {
          .navbar-links { display: flex; }
          .hamburger { display: none; }
          .mobile-menu { display: none !important; }
          .mobile-overlay { display: none !important; }
        }

        @media (max-width: 768px) {
          .navbar-links { display: none; }
          .hamburger { display: flex; }
        }

        @media (max-width: 480px) {
          .navbar { height: 60px; }
          .mobile-menu-header { height: 60px; }
          .mobile-menu { width: 80%; }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-inner">
          <div
            className="navbar-logo"
            onClick={() => handleNav('home')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNav('home')}
          >
            HOJIAKBAR<span>.</span>DEV
          </div>

          {/* Desktop Nav */}
          <div className="navbar-links">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                className={`nav-link ${activeSection === link.toLowerCase() ? 'active' : ''}`}
                onClick={() => handleNav(link.toLowerCase())}
              >
                {link}
              </button>
            ))}
            <button className="navbar-cta" onClick={() => handleNav('contact')}>
              Bog'lanish
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Dark overlay — tap to close */}
      <div
        className={`mobile-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Side drawer */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {/* Drawer header */}
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo">
            HOJIAKBAR<span>.</span>DEV
          </div>
          <button
            className="mobile-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div className="mobile-menu-links">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link}
              className={`mobile-nav-link ${activeSection === link.toLowerCase() ? 'active' : ''}`}
              onClick={() => handleNav(link.toLowerCase())}
            >
              {link}
              <span className="nav-number">0{i + 1}</span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mobile-menu-footer">
          <button
            className="mobile-footer-cta"
            onClick={() => handleNav('contact')}
          >
            Bog'lanish
          </button>
          <a
            className="mobile-footer-email"
            href="mailto:hojiakbarsobirov30@gmail.com"
          >
            hojiakbarsobirov30@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
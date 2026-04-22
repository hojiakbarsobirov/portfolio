import { useEffect, useRef } from 'react';

const SERVICES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Web Development',
    desc: 'React, JavaScript, HTML/CSS bilan zamonaviy, tez ishlovchi veb-saytlar va ilovalar yarataman.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'UI/UX Design',
    desc: "Foydalanuvchi uchun qulay va ko'zni quvontiruvchi interfeyslarga alohida e'tibor beraman.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
    title: 'Responsive Design',
    desc: 'Barcha qurilmalarda — mobil, planshet, kompyuterda mukammal ishlashi kafolatlanadi.',
  },
];

export default function About() {
  const sectionRef = useRef(null);

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
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .about-section {
          padding: clamp(72px, 10vw, 120px) clamp(20px, 5vw, 48px);
          background: #f9fafb;
        }

        .about-inner {
          max-width: 1080px;
          margin: 0 auto;
        }

        /* Header */
        .about-header {
          margin-bottom: clamp(40px, 6vw, 64px);
        }

        .about-label {
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

        .about-label::before {
          content: '';
          display: block;
          width: 24px;
          height: 2px;
          background: #d1d5db;
          border-radius: 2px;
        }

        .about-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #0a0a0a;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .about-subtitle {
          font-size: clamp(15px, 2vw, 17px);
          color: #6b7280;
          max-width: 540px;
          line-height: 1.75;
        }

        /* Two-column layout */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(24px, 4vw, 48px);
          align-items: start;
        }

        /* Services */
        .services-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .service-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: clamp(20px, 3vw, 28px);
          display: flex;
          gap: 18px;
          align-items: flex-start;
          transition: box-shadow 0.25s, transform 0.25s;
        }

        .service-card:hover {
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }

        .service-icon {
          width: 44px;
          height: 44px;
          background: #f3f4f6;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #374151;
          transition: background 0.2s;
        }

        .service-card:hover .service-icon {
          background: #0a0a0a;
          color: #fff;
        }

        .service-info h3 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(15px, 2vw, 17px);
          font-weight: 700;
          color: #0a0a0a;
          margin-bottom: 6px;
        }

        .service-info p {
          font-size: clamp(13px, 1.6vw, 15px);
          color: #6b7280;
          line-height: 1.65;
        }

        /* Stats */
        .stats-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .stat-box {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: clamp(24px, 3vw, 36px);
          text-align: center;
        }

        .stat-number {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: #0a0a0a;
          line-height: 1;
          margin-bottom: 6px;
        }

        .stat-label {
          font-size: 13px;
          font-weight: 500;
          color: #9ca3af;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .bio-box {
          background: #0a0a0a;
          border-radius: 16px;
          padding: clamp(24px, 3vw, 32px);
          color: #fff;
        }

        .bio-box h4 {
          font-family: 'Syne', sans-serif;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .bio-box p {
          font-size: 14px;
          line-height: 1.75;
          color: #9ca3af;
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
          .about-grid {
            grid-template-columns: 1fr;
          }
          .stats-col {
            flex-direction: row;
            flex-wrap: wrap;
          }
          .stat-box {
            flex: 1;
            min-width: 120px;
          }
        }

        @media (max-width: 480px) {
          .stats-col {
            flex-direction: column;
          }
          .stat-box {
            flex: unset;
          }
        }
      `}</style>

      <section id="about" className="about-section" ref={sectionRef}>
        <div className="about-inner">

          {/* Header */}
          <div className="about-header">
            <p className="about-label">Men haqimda</p>
            <h2 className="about-title fade-item">
              Frontend Developer,<br />
              backend o'rganmoqda
            </h2>
            <p className="about-subtitle fade-item">
              Men yangi texnologiyalar va kutubxonalarni tez o'rganib, loyihalarda
              qo'llay olaman. Jamoa bilan ishlashni yaxshi ko'raman va doim yangi
              qiyinchiliklarni qabul qilishga tayyorman.
            </p>
          </div>

          {/* Grid */}
          <div className="about-grid">
            {/* Left: Services */}
            <div className="services-list">
              {SERVICES.map((s, i) => (
                <div className="service-card fade-item" key={i}>
                  <div className="service-icon">{s.icon}</div>
                  <div className="service-info">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Stats + Bio */}
            <div className="stats-col">
              <div className="stat-box fade-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Tugatilgan loyihalar</div>
              </div>
              <div className="stat-box fade-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Mijoz mamnuniyati</div>
              </div>
              <div className="stat-box fade-item">
                <div className="stat-number">1+</div>
                <div className="stat-label">Yil tajriba</div>
              </div>
              <div className="bio-box fade-item">
                <h4>Hozir nima qilyapman?</h4>
                <p>
                  Frontend texnologiyalarni chuqurlashtirmoqda va backend (Node.js)
                  o'rganmoqda. Har bir loyihada yangi narsa o'rganaman va
                  sifatga alohida e'tibor beraman.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
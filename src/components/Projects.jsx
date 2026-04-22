import { useEffect, useRef } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'RuSpeak.uz',
    subtitle: 'Online kurs platformasi',
    desc: 'Rus tili onlayn kursi uchun zamonaviy ro\'yxatga olish platformasi. Toza UI, responsive dizayn va optimallashtirilgan foydalanuvchi oqimi.',
    tech: ['React.js', 'Firebase', 'Tailwind CSS'],
    link: 'https://ruspeak.vercel.app',
    year: '2024',
    status: 'Jonli',
  },
  {
    id: 2,
    title: 'RuSpeak Admin',
    subtitle: 'Boshqaruv paneli',
    desc: 'RuSpeak.uz dan keladigan lead\'larni boshqarish uchun LMS dashboard. Statistika, grafiklar va talabalarni kuzatish imkoniyati.',
    tech: ['React.js', 'Chart.js', 'Bootstrap', 'Firebase'],
    link: '#',
    year: '2024',
    status: 'Xususiy',
  },
  {
    id: 3,
    title: 'Portfolio Sayt',
    subtitle: 'Shaxsiy portfolio',
    desc: 'Loyihalar va ko\'nikmalarni taqdim etadigan to\'liq responsive portfolio veb-sayti. Toza UI va optimallashtirilgan unumdorlik.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    link: 'https://rezume-project.vercel.app/',
    year: '2024',
    status: 'Jonli',
  },
  {
    id: 4,
    title: 'RuSpeak-Test',
    subtitle: 'Til darajasini aniqlash',
    desc: 'Rus tili darajangizni tezda va osonlik bilan aniqlaydigan onlayn test platformasi.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://ruspeak-test.vercel.app/',
    year: '2024',
    status: 'Jonli',
  },
  {
    id: 5,
    title: 'LifeOS',
    subtitle: 'Hayot boshqaruv tizimi',
    desc: 'Kundalik hayotni tashkil qilish, rejalashtirish va boshqarish uchun mo\'ljallangan zamonaviy tizim.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    link: 'https://life-os-panel.vercel.app/',
    year: '2024',
    status: 'Jonli',
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-item').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .projects-section {
          padding: clamp(72px, 10vw, 120px) clamp(20px, 5vw, 48px);
          background: #f9fafb;
        }

        .projects-inner {
          max-width: 1080px;
          margin: 0 auto;
        }

        .projects-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: clamp(40px, 6vw, 64px);
          flex-wrap: wrap;
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
        }

        .project-count {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          color: #f3f4f6;
          letter-spacing: -0.04em;
          line-height: 1;
          white-space: nowrap;
        }

        /* Projects list */
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .project-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: clamp(20px, 3vw, 32px);
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: clamp(16px, 3vw, 32px);
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #0a0a0a;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.3s ease;
        }

        .project-card:hover {
          box-shadow: 0 4px 24px rgba(0,0,0,0.09);
          transform: translateY(-2px);
          border-color: #d1d5db;
        }

        .project-card:hover::before {
          transform: scaleY(1);
        }

        /* Project number */
        .project-num {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          color: #f3f4f6;
          letter-spacing: -0.04em;
          line-height: 1;
          min-width: 48px;
          transition: color 0.3s;
        }

        .project-card:hover .project-num {
          color: #e5e7eb;
        }

        /* Project content */
        .project-content {
          flex: 1;
        }

        .project-top {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 6px;
          flex-wrap: wrap;
        }

        .project-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(16px, 2.2vw, 20px);
          font-weight: 700;
          color: #0a0a0a;
        }

        .project-subtitle {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9ca3af;
        }

        .project-desc {
          font-size: clamp(13px, 1.6vw, 15px);
          color: #6b7280;
          line-height: 1.65;
          margin-bottom: 14px;
          max-width: 560px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .project-tag {
          padding: 4px 12px;
          background: #f3f4f6;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          color: #4b5563;
        }

        /* Right meta */
        .project-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          flex-shrink: 0;
        }

        .project-year {
          font-size: 13px;
          font-weight: 600;
          color: #d1d5db;
        }

        .status-badge {
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .status-badge.live {
          background: #dcfce7;
          color: #166534;
        }

        .status-badge.private {
          background: #f3f4f6;
          color: #6b7280;
        }

        .project-arrow {
          width: 36px;
          height: 36px;
          background: #f3f4f6;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          transition: background 0.2s, color 0.2s, transform 0.2s;
          flex-shrink: 0;
        }

        .project-card:hover .project-arrow {
          background: #0a0a0a;
          color: #fff;
          transform: rotate(-45deg);
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
        @media (max-width: 640px) {
          .project-card {
            grid-template-columns: 1fr;
          }
          .project-num {
            display: none;
          }
          .project-meta {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }
          .project-count {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .projects-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <section id="projects" className="projects-section" ref={sectionRef}>
        <div className="projects-inner">

          <div className="projects-header">
            <div>
              <p className="section-label">Loyihalar</p>
              <h2 className="section-title fade-item">So'nggi ishlarim</h2>
            </div>
            <span className="project-count">0{PROJECTS.length}</span>
          </div>

          <div className="projects-list">
            {PROJECTS.map((project, i) => (
              <a
                key={project.id}
                href={project.link !== '#' ? project.link : undefined}
                target={project.link !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="project-card fade-item"
                style={{ cursor: project.link === '#' ? 'default' : 'pointer' }}
                onClick={(e) => project.link === '#' && e.preventDefault()}
              >
                {/* Number */}
                <span className="project-num">0{i + 1}</span>

                {/* Content */}
                <div className="project-content">
                  <div className="project-top">
                    <span className="project-title">{project.title}</span>
                    <span className="project-subtitle">{project.subtitle}</span>
                  </div>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-tags">
                    {project.tech.map((t, ti) => (
                      <span className="project-tag" key={ti}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Meta */}
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <span className={`status-badge ${project.status === 'Jonli' ? 'live' : 'private'}`}>
                    {project.status}
                  </span>
                  <div className="project-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
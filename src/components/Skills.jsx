import { useEffect, useRef, useState } from 'react';

const SKILLS = [
  { name: 'HTML5',        level: 95, category: 'Markup' },
  { name: 'CSS3',         level: 90, category: 'Styling' },
  { name: 'JavaScript',   level: 88, category: 'Language' },
  { name: 'React JS',     level: 87, category: 'Framework' },
  { name: 'Tailwind CSS', level: 92, category: 'Styling' },
  { name: 'Bootstrap',    level: 85, category: 'Styling' },
];

const TOOLS = [
  'Git & GitHub', 'Figma', 'Firebase', 'Vercel', 'VS Code', 'npm / yarn',
];

function SkillBar({ name, level, category, animate }) {
  return (
    <div className="skill-row">
      <div className="skill-meta">
        <span className="skill-name">{name}</span>
        <div className="skill-right">
          <span className="skill-category">{category}</span>
          <span className="skill-percent">{level}%</span>
        </div>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            entry.target.querySelectorAll('.fade-item').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .skills-section {
          padding: clamp(72px, 10vw, 120px) clamp(20px, 5vw, 48px);
          background: #fff;
        }

        .skills-inner {
          max-width: 1080px;
          margin: 0 auto;
        }

        .skills-header {
          margin-bottom: clamp(40px, 6vw, 64px);
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

        /* Main grid */
        .skills-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: clamp(24px, 4vw, 56px);
          align-items: start;
        }

        /* Skill bars */
        .skills-bars {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .skill-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .skill-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .skill-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          font-weight: 700;
          color: #0a0a0a;
        }

        .skill-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .skill-category {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #d1d5db;
        }

        .skill-percent {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: #374151;
          min-width: 38px;
          text-align: right;
        }

        .skill-track {
          height: 6px;
          background: #f3f4f6;
          border-radius: 999px;
          overflow: hidden;
        }

        .skill-fill {
          height: 100%;
          background: #0a0a0a;
          border-radius: 999px;
          transition: width 1.1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Right side: tools + quote */
        .skills-side {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .tools-box {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: clamp(20px, 3vw, 28px);
        }

        .tools-box h3 {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #0a0a0a;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e5e7eb;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .tool-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .tool-chip:hover {
          border-color: #9ca3af;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .tool-dot {
          width: 7px;
          height: 7px;
          background: #0a0a0a;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* Currently learning */
        .learning-box {
          background: #0a0a0a;
          border-radius: 16px;
          padding: clamp(20px, 3vw, 28px);
          color: #fff;
        }

        .learning-box h3 {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 12px;
          opacity: 0.9;
        }

        .learning-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          font-size: 14px;
          color: #9ca3af;
        }

        .learning-item:last-child { border-bottom: none; }

        .learning-badge {
          padding: 3px 10px;
          background: rgba(255,255,255,0.1);
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          color: #d1d5db;
          flex-shrink: 0;
          margin-left: auto;
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
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .tools-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="skills" className="skills-section" ref={sectionRef}>
        <div className="skills-inner">

          <div className="skills-header">
            <p className="section-label">Texnik ko'nikmalar</p>
            <h2 className="section-title fade-item">
              Qo'llaydigan<br />texnologiyalar
            </h2>
          </div>

          <div className="skills-grid">
            {/* Bars */}
            <div className="skills-bars">
              {SKILLS.map((skill, i) => (
                <div className="fade-item" key={i}>
                  <SkillBar {...skill} animate={animate} />
                </div>
              ))}
            </div>

            {/* Side */}
            <div className="skills-side">
              {/* Tools */}
              <div className="tools-box fade-item">
                <h3>Ishlaydigan vositalar</h3>
                <div className="tools-grid">
                  {TOOLS.map((tool, i) => (
                    <div className="tool-chip" key={i}>
                      <span className="tool-dot" />
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* Currently learning */}
              <div className="learning-box fade-item">
                <h3>Hozir o'rganmoqdaman</h3>
                {[
                  { name: 'Node.js & Express', status: 'Faol' },
                  { name: 'TypeScript',         status: 'Faol' },
                  { name: 'PostgreSQL',          status: 'Boshlangan' },
                ].map((item, i) => (
                  <div className="learning-item" key={i}>
                    <span>{item.name}</span>
                    <span className="learning-badge">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
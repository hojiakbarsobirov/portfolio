const TECH_ITEMS = [
  'HTML5', 'CSS3', 'JavaScript', 'React JS', 'Tailwind CSS',
  'Bootstrap', 'Firebase', 'Git', 'Figma', 'Responsive Design',
];

export default function SkillsMarquee() {
  const doubled = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <>
      <style>{`
        .marquee-section {
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
          padding: 18px 0;
          background: #f9fafb;
          overflow: hidden;
          user-select: none;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 0;
          animation: marqueeAnim 28s linear infinite;
          width: max-content;
        }

        @keyframes marqueeAnim {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0;
          white-space: nowrap;
        }

        .marquee-text {
          font-family: 'Syne', sans-serif;
          font-size: clamp(13px, 2vw, 15px);
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9ca3af;
          padding: 0 clamp(20px, 3vw, 36px);
          transition: color 0.2s;
        }

        .marquee-dot {
          color: #d1d5db;
          font-size: 10px;
          flex-shrink: 0;
        }
      `}</style>

      <div className="marquee-section">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-text">{item}</span>
              <span className="marquee-dot">●</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
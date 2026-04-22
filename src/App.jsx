import { useState, useEffect } from 'react';
import Navbar       from './components/NavbarPage';
import Hero         from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import About        from './components/AboutPage';
import Skills       from './components/Skills';
import Projects     from './components/Projects';
import Contact      from './components/Contact';
import Footer       from './components/FooterPage';
import ChatWidget   from './components/ChatWidget';
import './index.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    const SECTIONS = ['home', 'about', 'skills', 'projects', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 68; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar activeSection={activeSection} scrollTo={scrollTo} />

      <main>
        <Hero scrollTo={scrollTo} />
        <SkillsMarquee />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer scrollTo={scrollTo} />

      {/* Floating AI Chat */}
      <ChatWidget />
    </>
  );
}
import React, { useState, useEffect } from "react";
import Navbar from "./components/NavbarPage";
import Hero from "./components/Hero";
import SkillsMarquee from "./components/SkillsMarquee";
import About from "./components/AboutPage";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/FooterPage";

// ✅ To'g'ri import (agar rasm src/assets da bo'lsa)
// import LandingPage from './assets/landing-page.png'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const skills = [
    { name: "HTML", level: 95, color: "from-orange-500 to-red-500" },
    { name: "CSS", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "Bootstrap", level: 85, color: "from-purple-500 to-pink-500" },
    { name: "Tailwind CSS", level: 92, color: "from-cyan-500 to-blue-500" },
    { name: "JavaScript", level: 88, color: "from-yellow-500 to-orange-500" },
    { name: "React JS", level: 87, color: "from-blue-400 to-cyan-400" },
  ];

  const projects = [
    {
      title: "RuSpeak.uz online course",
      description: `RusPeak — Online Russian Language Course Registration Platform.
A modern and user-friendly registration website built for RusPeak.uz, designed to streamline student enrollment for online Russian language courses. The platform offers a clean UI, responsive design, and optimized user flow, making the sign-up process simple, fast, and intuitive.`,
      image: "/landing-page.png", // ✅ Public papkadagi rasm
      tech: ["React.js", "Firebase", "Tailwind CSS"],
      gradient: "from-purple-500 to-pink-500",
      link: "https://ruspeak.vercel.app", // ✅ To'liq URL bilan
    },
    {
      title: "RuSpeak.uz for Admin-Pannel",
      description:
        "Includes an integrated LMS dashboard for managing leads coming from RusPeak.uz, allowing administrators to track, organize, and follow up with student registrations efficiently.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
      tech: ["React.js", "Chart.js", "Bootstrap", "Firebase"],
      gradient: "from-pink-500 to-rose-500",
      link: "https://your-analytics.com",
    },
    {
      title: "Restaurant Ordering System",
      description:
        "Modern restaurant website with online ordering, reservation system, and real-time order tracking",
      image: "/resume-projects.png",
      tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      gradient: "from-orange-500 to-red-500",
      link: "https://rezume-project.vercel.app/",
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
          
          @keyframes gradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>

      <div className={darkMode ? "dark" : ""}>
        <div className="relative bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-500">
          {/* Animated Background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl transition-all duration-300"
              style={{
                left: `${mousePosition.x - 192}px`,
                top: `${mousePosition.y - 192}px`,
              }}
            />
            <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-orange-500/10 dark:from-pink-500/20 dark:to-orange-500/20 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <Navbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            scrolled={scrolled}
          />

          <Hero scrollToSection={scrollToSection} />

          <SkillsMarquee skills={skills} />

          <About />

          <Skills skills={skills} />

          <Projects projects={projects} />

          <Contact />

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

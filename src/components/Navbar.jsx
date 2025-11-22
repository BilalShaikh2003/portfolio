import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  // Smooth scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Highlight active nav link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'education', 'projects', 'certificates', 'achievements'];
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="logo">
          <a 
            href="https://www.linkedin.com/in/bilal-shaikh-3219b4285/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Bilal Ahmad Shaikh
          </a>
        </div>

        <div className="nav-links">
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => scrollToSection(e, 'about')}
          >
            About
          </a>
          <a 
            href="#skills" 
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={(e) => scrollToSection(e, 'skills')}
          >
            Skills
          </a>
          <a 
            href="#education" 
            className={activeSection === 'education' ? 'active' : ''}
            onClick={(e) => scrollToSection(e, 'education')}
          >
            Education
          </a>
          <a 
            href="#projects" 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={(e) => scrollToSection(e, 'projects')}
          >
            Projects
          </a>
          <a 
            href="#certificates" 
            className={activeSection === 'certificates' ? 'active' : ''}
            onClick={(e) => scrollToSection(e, 'certificates')}
          >
            Certificates
          </a>
          <a 
            href="#achievements" 
            className={activeSection === 'achievements' ? 'active' : ''}
            onClick={(e) => scrollToSection(e, 'achievements')}
          >
            Achievements
          </a>
          <a 
            href="https://drive.google.com/file/d/1jtfEp55QwLxcnwUlCvAXYgGVGF9wS7ic/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
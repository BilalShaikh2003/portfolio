import { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const lines = [
    'Electronics & Computer Science Graduate',
    'Java • Python • Web Developer • Spring Boot • SQL • NoSQL • Docker • Git',
  ];

  useEffect(() => {
    const currentLine = lines[currentLineIndex];
    let timeout;

    if (!isDeleting && displayText.length < currentLine.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentLine.slice(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === currentLine.length) {
      // Pause at end
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 35);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next line
      setIsDeleting(false);
      setCurrentLineIndex((currentLineIndex + 1) % lines.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentLineIndex]);

  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Bilal Ahmad Shaikh</h1>
        <div className="typing-container">
          <span className="typed-text">{displayText}</span>
          <span className="cursor">|</span>
        </div>
        <a 
          href="https://drive.google.com/file/d/1WjFBgq1Q1qhbQwkjWpKuWFE1hV9OWhBj/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn hero-btn"
        >
          📄 Download Resume
        </a>
      </div>
    </header>
  );
}

export default Hero;

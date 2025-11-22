import './Skills.css';

function Skills() {
  // Array of skills - easier to manage and update
  const skills = [
    'C',
    'Java',
    'Python',
    'JavaScript',
    'HTML',
    'CSS',
    'PHP',
    'MySQL',
    'MongoDB',
    'Git',
    'REST APIs',
    'Spring Boot',
    'AWS Foundations',
    'Docker',
    'Linux',
    'React.js',
    '.NET',
    'Node.js'
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

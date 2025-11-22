import '../styles/Education.css';

function Education() {
  // Array of education data - easy to manage
  const educationData = [
    {
      id: 1,
      institution: 'Rizvi College of Engineering',
      university: 'University of Mumbai',
      degree: 'B.E. Electronics & Computer Science',
      score: '8.59 CGPA',
      year: 'Pursuing 2025',
      icon: '🎓'
    },
    {
      id: 2,
      institution: 'Maharashtra State Board',
      degree: 'HSC (Higher Secondary Certificate)',
      score: '74.46%',
      year: '2021',
      icon: '📚'
    },
    {
      id: 3,
      institution: 'Maharashtra State Board',
      degree: 'SSC (Secondary School Certificate)',
      score: '62.4%',
      year: '2019',
      icon: '📖'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="edu-icon">{edu.icon}</div>
              <h3 className="edu-institution">{edu.institution}</h3>
              {edu.university && (
                <p className="edu-university">{edu.university}</p>
              )}
              <p className="edu-degree">{edu.degree}</p>
              <div className="edu-footer">
                <span className="edu-score">{edu.score}</span>
                <span className="edu-year">{edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
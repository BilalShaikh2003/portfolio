import './Projects.css';

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'Library Resource Management System',
      description: 'Desktop app (Java Swing + MySQL) that cut book-processing time by 50% via RESTful APIs and barcode integration.',
      technologies: ['Java', 'MySQL', 'REST API', 'Swing'],
      githubUrl: 'https://github.com/bilal-ahmad-shaikh/library-rms',
      icon: '📚'
    },
    {
      id: 2,
      title: 'Expense Tracker',
      description: 'PHP + MySQL web app with responsive UI, category budgets and monthly reports.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
      githubUrl: 'https://github.com/bilal-ahmad-shaikh/expense-tracker',
      icon: '💰'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <span className="project-icon">{project.icon}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

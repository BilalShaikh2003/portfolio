import '../styles/Certificates.css';

function Certificates() {
  const certificates = [
    {
      id: 1,
      name: 'Python Developer Essential Bootcamp',
      icon: '🐍'
    },
    {
      id: 2,
      name: 'AWS Academy Cloud Foundations',
      icon: '☁️'
    },
    {
      id: 3,
      name: 'MySQL & MongoDB with Python',
      icon: '🗄️'
    },
    {
      id: 4,
      name: 'Git & GitHub Bootcamp',
      icon: '📦'
    },
    {
      id: 5,
      name: 'Modern JavaScript',
      icon: '⚡'
    },
    {
      id: 6,
      name: 'Full-Stack Java – TNS',
      icon: '☕'
    },
    {
    id: 7,
    name: 'Hands On React JS From Beginner To Expert',
    icon: '⚛️'
    }
  ];

  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-item">
              <span className="cert-icon">{cert.icon}</span>
              <span className="cert-name">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
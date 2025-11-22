import './Achievements.css';

function Achievements() {
  const achievements = [
    {
      id: 1,
      title: 'College Secretary of Finance & PR',
      description: 'Led 5-member core team',
      icon: '🏆'
    },
    {
      id: 2,
      title: 'Head Coordinator',
      description: 'Craft-UI tech event (7th sem)',
      icon: '🎯'
    },
    {
      id: 3,
      title: 'Media & PR Teams Leader',
      description: 'Led comprehensive college-event coverage',
      icon: '📸'
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-list">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;

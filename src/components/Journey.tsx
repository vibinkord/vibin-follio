import './Journey.css'

const Journey = () => {
  const milestones = [
    {
      year: '2022',
      title: 'Started B.Tech Information Technology',
      description: 'Began formal education and laid the groundwork for software engineering.'
    },
    {
      year: '2023',
      title: 'Foundational Web Development',
      description: 'Built foundational web development projects and strengthened programming fundamentals.'
    },
    {
      year: '2024',
      title: 'Full Stack & Software Engineering',
      description: 'Focused on Full Stack Development, databases, APIs, and software engineering concepts.'
    },
    {
      year: '2025',
      title: 'Advanced Projects & Cloud Deployments',
      description: 'Built advanced projects including DEV.STATION, SaaS platforms, cloud deployments, and backend systems.'
    },
    {
      year: '2026',
      title: 'Professional Preparation',
      description: 'Preparing for Software Engineer, Backend Developer, and Full Stack Developer opportunities.'
    }
  ]

  return (
    <section id="journey" className="journey-section">
      <h2 className="section-title text-center text-3xl font-bold mb-10">Career Timeline</h2>
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">{milestone.year}</span>
              <h3 className="timeline-title">{milestone.title}</h3>
              <p className="timeline-description">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Journey

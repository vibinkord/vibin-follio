import './CareerTimeline.css'

const CareerTimeline = () => {
  const milestones = [
    {
      year: '2022',
      title: 'Started B.Tech Information Technology',
    },
    {
      year: '2023',
      title: 'Built Web Development Projects',
    },
    {
      year: '2024',
      title: 'Focused on Full Stack Development',
    },
    {
      year: '2025',
      title: 'Built SaaS Platforms and AI Applications',
    },
    {
      year: '2026',
      title: 'Preparing for Software Engineering Roles',
    }
  ]

  return (
    <section id="career-timeline" className="journey-section">
      <h2 className="section-title text-center text-3xl font-bold mb-10">Career Timeline</h2>
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">{milestone.year}</span>
              <h3 className="timeline-title">{milestone.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CareerTimeline

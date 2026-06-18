import './Projects.css'

const Projects = () => {
  const featuredProjects = [
    {
      title: 'DEV.STATION – AI-Powered Developer Intelligence Platform',
      description:
        'A full-stack developer intelligence platform that aggregates GitHub activity, coding performance, resume analytics, and career insights into a unified dashboard. The system provides AI-powered recommendations, developer scoring, and personalized growth tracking.',
      link: 'https://github.com/vibinkord/developer-dashboard-main-',
      techStack: ['React', 'Spring Boot', 'PostgreSQL', 'JWT', 'Docker', 'AWS']
    },
    {
      title: 'AI Resume Analyzer',
      description:
        'An intelligent resume analysis platform that evaluates resumes against job descriptions, identifies missing skills and keywords, and generates actionable suggestions to improve ATS compatibility.',
      link: 'https://github.com/vibinkord/Ai-based-ResumeAnalyzer',
      techStack: ['Java', 'Spring Boot', 'AI Integration']
    },
    {
      title: 'Student Management System',
      description:
        'A role-based student management platform supporting attendance tracking, academic records, notes management, authentication, and administrative operations through a modern dashboard interface.',
      link: 'https://github.com/vibinkord/Student-dashboard',
      techStack: ['React', 'Flask', 'Docker']
    }
  ]

  const archiveProjects = [
    {
      title: 'Language Translator Platform',
      description: 'A web-based translation solution bridging Tamil and English. Features real-time translation and voice input.',
      link: 'https://github.com/vibinkord/language-traslator-with-assembly-ai',
      techStack: ['HTML/CSS', 'JavaScript', 'APIs']
    },
    {
      title: 'Hotel Menu QR Scanner (Patent)',
      description: 'A patented QR-based digital menu system for the hospitality industry supporting real-time updates and multilingual content.',
      link: '#',
      techStack: ['Web Tech', 'QR Tech']
    },
    {
      title: 'Calculator Web Application',
      description: 'A responsive calculator supporting basic arithmetic operations with real-time input handling.',
      link: 'https://github.com/vibinkord/calculator',
      techStack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Gym Management System',
      description: 'A system to digitize member records, fee tracking, and notifications for gym owners.',
      link: 'https://github.com/vibinkord/GYM-MANAGEMENT',
      techStack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Teacher–Student Booking System',
      description: 'Role-based appointment booking system for students and teachers.',
      link: 'https://github.com/vibinkord/teacher-student-appointment-system',
      techStack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Recipe Book Web Application',
      description: 'A digital recipe book allowing users to browse, search, and store recipes.',
      link: 'https://github.com/vibinkord/recipie-book',
      techStack: ['HTML', 'CSS', 'JavaScript']
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-container featured-grid">
        {featuredProjects.map((project, index) => (
          <div key={index} className="project featured-project">
            <h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <div className="tech-stack-badges">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>

      <h2 className="section-title mt-16">Project Archive</h2>
      <div className="projects-container archive-grid">
        {archiveProjects.map((project, index) => (
          <div key={index} className="project archive-project">
            <h4>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h4>
            <div className="tech-stack-badges small">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
              GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

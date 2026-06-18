import './About.css'
import CurrentFocus from './CurrentFocus'

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1 className="about-title">About Me</h1>
      <br />
      <div className="about-container">
        <div className="about-text">
          <p>
            I am a Final Year Information Technology student passionate about Software Engineering, Backend Development, Cloud Computing, and DevOps.
          </p>
          <br />
          <p>
            My primary expertise lies in Java, Spring Boot, PostgreSQL, React, Docker, AWS, and REST API development. I enjoy designing scalable applications, solving real-world problems, and continuously improving my technical skills through hands-on projects.
          </p>
          <br />
          <p>
            Over the past few years, I have worked on multiple full-stack applications, SaaS platforms, AI-powered tools, and cloud-based deployments that strengthened my understanding of software architecture, authentication systems, databases, and deployment workflows.
          </p>
          <br />
          <p>
            I am actively preparing for Software Engineer, Backend Developer, and Full Stack Developer opportunities where I can contribute, learn, and grow as an engineer.
          </p>
        </div>

        <CurrentFocus />
      </div>
    </section>
  )
}

export default About

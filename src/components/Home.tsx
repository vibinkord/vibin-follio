import { useState, useEffect } from 'react'
import './Home.css'
import { TextHoverEffect } from './ui/text-hover-effect'

const roles = [
  "Software Engineer",
  "Backend Developer",
  "Full Stack Developer",
  "Cloud & DevOps Enthusiast"
]

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hi, I'm</h3>
        <br />
        <h1 id="name">
          <TextHoverEffect text="Vibin Richard" />
        </h1>
        <br />
        <h3>
          <span className="animated-role">{roles[currentRole]}</span>
        </h3>
        <br />
        <p id="info" className="text-lg text-neutral-300 max-w-2xl leading-relaxed">
          Final Year Information Technology student passionate about building scalable software solutions, backend systems, and modern web applications using Java, Spring Boot, React, PostgreSQL, Docker, AWS, and DevOps practices.
        </p>
        <br />
        <div className="cta-buttons flex gap-4 mt-2">
          <a href="#projects" className="cta-btn primary">View Projects</a>
          <a href="/resume/Vibin Richard.D CV.pdf" target="_blank" rel="noopener noreferrer" className="cta-btn outline">Download Resume</a>
          <a href="#contact" className="cta-btn outline">Contact Me</a>
        </div>
        <div className="socialmedia">
          <a href="https://www.instagram.com/vibin_kord" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" className="img" />
          </a>

          <a href="https://github.com/vibinkord" target="_blank" rel="noopener noreferrer">
            <img src="/images/gitlogo.png" alt="GitHub" className="img" />
          </a>

          <a
            href="https://www.linkedin.com/in/vibin-richard-8186461b4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/linkedin.png" alt="LinkedIn" className="img" />
          </a>
        </div>
      </div>
      <div className="home-img">
        <img src="/images/profile.png" alt="Vibin Richard" className="profile-image" />
      </div>
    </section>
  )
}

export default Home

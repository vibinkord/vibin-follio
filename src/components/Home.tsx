import './Home.css'
import { TextHoverEffect } from './ui/text-hover-effect'

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, it's me</h3>
        <br />
        <h1 id="name">
          <TextHoverEffect text="Vibin Richard" />
        </h1>
        <br />
        <h3>
          And I am a <span>Student</span>
        </h3>
        <br />
        <p id="info">
          Hello, I'm Vibin Richard, a dedicated student pursuing my engineering education of
          B.TECH IT, at Sri Shakthi Institute of Engineering and Technology, where I'm immersed in
          a dynamic learning environment that fuels my passion for innovation and drives my
          aspirations to excel in the field of engineering.
        </p>
        <br />
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

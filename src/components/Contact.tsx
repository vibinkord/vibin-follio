import './Contact.css'

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        Open to Software Engineering, Backend Development, Full Stack Development, Internship, and collaborative opportunities.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <span className="contact-icon">📧</span>
          <h3>Email</h3>
          <p>
            <a href="mailto:vibinkord24@gmail.com">vibinkord24@gmail.com</a>
          </p>
        </div>

        <div className="contact-card">
          <span className="contact-icon">📞</span>
          <h3>Phone</h3>
          <p>
            <a href="tel:+918903388606">+91 89033 88606</a>
          </p>
        </div>

        <div className="contact-card">
          <span className="contact-icon">📍</span>
          <h3>Location</h3>
          <p>
            <a
              href="https://www.google.com/maps/place/Coimbatore,+Tamil+Nadu,+India/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coimbatore, Tamil Nadu, India
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact

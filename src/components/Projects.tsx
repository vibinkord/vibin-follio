import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'AI-Based Resume Analyser',
      description:
        'Built an AI-powered resume analyser that scores resumes against job descriptions and highlights missing keywords. Streamlines candidate screening with quick, consistent insights.',
      link: 'https://github.com/vibinkord/Ai-based-ResumeAnalyzer',
    },
    {
      title: 'Student Management System',
      description:
        'Full-stack student dashboard with Flask API and React frontend covering auth, attendance, marks, subjects, notes, and role-based dashboards for admins, staff, and students. Includes Docker setup and scripts for local or containerized runs.',
      link: 'https://github.com/vibinkord/Student-dashboard',
    },
    {
      title: 'Language Translator Platform',
      description:
        'Developed a web-based translation solution bridging Tamil and English for academic, professional, and daily needs. Features real-time translation, categorized options, voice input, and personalized learning tools. Built for scalability, security, and future AI-powered enhancements.',
      link: 'https://github.com/vibinkord/language-traslator-with-assembly-ai',
    },
    {
      title: 'Hotel Menu QR Scanner (Patent)',
      description:
        'Designed and co-invented a patented QR-based digital menu system for the hospitality industry. Guests scan QR codes to access multilingual, instantly-updatable menus, with rich content and allergen info. The system supports real-time updates, operational integration, sustainability, and data security.',
      link: '#',
    },
    {
      title: 'Calculator Web Application',
      description:
        'Developed a responsive calculator using HTML, CSS, and JavaScript. The application supports basic arithmetic operations with real-time input handling, keyboard support, and clean UI design. This project strengthened my understanding of DOM manipulation and event handling.',
      link: 'https://github.com/vibinkord/calculator',
    },
    {
      title: 'Gym Management System',
      description:
        'Designed a Gym Management System to digitize member records, fee tracking, and notifications. The system reduces dependency on paper receipts and improves communication between gym owners and members. Built using HTML, CSS, JavaScript with a modular and maintainable structure.',
      link: 'https://github.com/vibinkord/GYM-MANAGEMENT',
    },
    {
      title: 'Teacher–Student Booking System',
      description:
        'Implemented a role-based appointment booking system for students and teachers. Students can book appointments, teachers can approve or cancel requests, and administrators can manage users and records. The system uses client-side storage and follows clean UI and modular coding practices.',
      link: 'https://github.com/vibinkord/teacher-student-appointment-system',
    },
    {
      title: 'Recipe Book Web Application',
      description:
        'Created a digital recipe book application that allows users to browse, search, and store recipes. Features include categorized recipes, ingredient lists, preparation steps, and a user-friendly interface. This project focused on UI design, data structuring, and usability.',
      link: 'https://github.com/vibinkord/recipie-book',
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <h2>Main Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

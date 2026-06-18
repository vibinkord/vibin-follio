import './Skills.css'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'

const Skills = () => {
  return (
    <section className="skills-section bg-white dark:bg-[#0f172a]" id="skills">
      <h1 className="section-title text-slate-900 dark:text-slate-100">Skills & Technologies</h1>

      {/* Tech Stack Snapshot */}
      <div className="tech-snapshot bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-sky-500/20 shadow-sm">
        <h2 className="snapshot-title text-slate-800 dark:text-slate-200">Tech Stack Snapshot</h2>
        <div className="snapshot-container">
          <div className="snapshot-group">
            <span className="snapshot-label text-slate-600 dark:text-slate-400">Backend</span>
            <div className="snapshot-badges">
              <span className="badge badge-backend highlight-tech border-slate-400 dark:border-white/30 shadow-sm">Java</span>
              <span className="badge badge-backend highlight-tech border-slate-400 dark:border-white/30 shadow-sm">Spring Boot</span>
              <span className="badge badge-backend">REST APIs</span>
            </div>
          </div>
          <div className="snapshot-group">
            <span className="snapshot-label text-slate-600 dark:text-slate-400">Frontend</span>
            <div className="snapshot-badges">
              <span className="badge badge-frontend highlight-tech border-slate-400 dark:border-white/30 shadow-sm">React</span>
              <span className="badge badge-frontend">JavaScript</span>
              <span className="badge badge-frontend">Vite</span>
            </div>
          </div>
          <div className="snapshot-group">
            <span className="snapshot-label text-slate-600 dark:text-slate-400">Database</span>
            <div className="snapshot-badges">
              <span className="badge badge-database highlight-tech border-slate-400 dark:border-white/30 shadow-sm">PostgreSQL</span>
              <span className="badge badge-database">MySQL</span>
              <span className="badge badge-database">Supabase</span>
            </div>
          </div>
          <div className="snapshot-group">
            <span className="snapshot-label text-slate-600 dark:text-slate-400">Cloud & DevOps</span>
            <div className="snapshot-badges">
              <span className="badge badge-cloud highlight-tech border-slate-400 dark:border-white/30 shadow-sm">Docker</span>
              <span className="badge badge-cloud">Jenkins</span>
              <span className="badge badge-cloud highlight-tech border-slate-400 dark:border-white/30 shadow-sm">AWS EC2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skill Levels */}
      <div className="skill-levels">
        <div className="level-column advanced bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 shadow-sm">
          <div className="level-header">
            <i className='bx bxs-check-circle'></i>
            <h3 className="text-slate-800 dark:text-slate-200">Advanced</h3>
          </div>
          <div className="level-items">
            <span className="highlight-tech bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-slate-200 border-slate-400 dark:border-white/30 shadow-sm">Java</span>
            <span className="bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300">SQL</span>
            <span className="highlight-tech bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-slate-200 border-slate-400 dark:border-white/30 shadow-sm">Spring Boot</span>
            <span className="bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300">Git</span>
          </div>
        </div>
        <div className="level-column intermediate bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 shadow-sm">
          <div className="level-header">
            <i className='bx bx-trending-up'></i>
            <h3 className="text-slate-800 dark:text-slate-200">Intermediate</h3>
          </div>
          <div className="level-items">
            <span className="highlight-tech bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-slate-200 border-slate-400 dark:border-white/30 shadow-sm">React</span>
            <span className="highlight-tech bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-slate-200 border-slate-400 dark:border-white/30 shadow-sm">PostgreSQL</span>
            <span className="highlight-tech bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-slate-200 border-slate-400 dark:border-white/30 shadow-sm">Docker</span>
            <span className="bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300">REST APIs</span>
          </div>
        </div>
        <div className="level-column learning bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 shadow-sm">
          <div className="level-header">
            <i className='bx bx-book-reader'></i>
            <h3 className="text-slate-800 dark:text-slate-200">Currently Learning</h3>
          </div>
          <div className="level-items">
            <span className="highlight-tech bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-slate-200 border-slate-400 dark:border-white/30 shadow-sm">AWS</span>
            <span className="bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300">Jenkins</span>
            <span className="bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300">System Design</span>
            <span className="bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300">CI/CD</span>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="skills-grid">
        {/* Languages */}
        <CardContainer className="inter-var">
          <CardBody className="skill-card bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-slate-900 border-2 border-cyan-400 dark:border-cyan-500/[0.3] shadow-lg hover:shadow-cyan-200 dark:hover:shadow-cyan-900/[0.2] transition-all duration-300 rounded-xl p-6">
            <CardItem translateZ="50" className="card-header text-cyan-600 dark:text-cyan-300">
              <i className='bx bx-code-alt'></i> Languages
            </CardItem>
            <CardItem as="ul" translateZ="60" className="card-list text-slate-800 dark:text-slate-300 font-medium">
              <li className="highlight-text text-slate-900 dark:text-white drop-shadow-sm"><i className='bx bxl-java'></i> Java</li>
              <li><i className='bx bxl-javascript'></i> JavaScript</li>
              <li><i className='bx bxs-data'></i> SQL</li>
              <li><i className='bx bxl-python'></i> Python</li>
              <li><i className='bx bx-code-block'></i> C</li>
              <li><i className='bx bx-code-block'></i> C++</li>
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* Frontend */}
        <CardContainer className="inter-var">
          <CardBody className="skill-card bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-slate-900 border-2 border-purple-400 dark:border-purple-500/[0.3] shadow-lg hover:shadow-purple-200 dark:hover:shadow-purple-900/[0.2] transition-all duration-300 rounded-xl p-6">
            <CardItem translateZ="50" className="card-header text-purple-600 dark:text-purple-300">
              <i className='bx bx-layout'></i> Frontend
            </CardItem>
            <CardItem as="ul" translateZ="60" className="card-list text-slate-800 dark:text-slate-300 font-medium">
              <li className="highlight-text text-slate-900 dark:text-white drop-shadow-sm"><i className='bx bxl-react'></i> React</li>
              <li><i className='bx bxl-html5'></i> HTML</li>
              <li><i className='bx bxl-css3'></i> CSS</li>
              <li><i className='bx bxl-javascript'></i> JavaScript</li>
              <li><i className='bx bx-bolt-circle'></i> Vite</li>
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* Backend */}
        <CardContainer className="inter-var">
          <CardBody className="skill-card bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-slate-900 border-2 border-emerald-400 dark:border-emerald-500/[0.3] shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900/[0.2] transition-all duration-300 rounded-xl p-6">
            <CardItem translateZ="50" className="card-header text-emerald-600 dark:text-emerald-300">
              <i className='bx bx-server'></i> Backend
            </CardItem>
            <CardItem as="ul" translateZ="60" className="card-list text-slate-800 dark:text-slate-300 font-medium">
              <li className="highlight-text text-slate-900 dark:text-white drop-shadow-sm"><i className='bx bxl-spring-boot'></i> Spring Boot</li>
              <li><i className='bx bx-transfer-alt'></i> REST APIs</li>
              <li><i className='bx bx-key'></i> JWT Authentication</li>
              <li><i className='bx bxl-nodejs'></i> Node.js</li>
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* Databases */}
        <CardContainer className="inter-var">
          <CardBody className="skill-card bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-slate-900 border-2 border-orange-400 dark:border-orange-500/[0.3] shadow-lg hover:shadow-orange-200 dark:hover:shadow-orange-900/[0.2] transition-all duration-300 rounded-xl p-6">
            <CardItem translateZ="50" className="card-header text-orange-600 dark:text-orange-300">
              <i className='bx bx-data'></i> Databases
            </CardItem>
            <CardItem as="ul" translateZ="60" className="card-list text-slate-800 dark:text-slate-300 font-medium">
              <li className="highlight-text text-slate-900 dark:text-white drop-shadow-sm"><i className='bx bxl-postgresql'></i> PostgreSQL</li>
              <li><i className='bx bxs-data'></i> MySQL</li>
              <li><i className='bx bx-coin-stack'></i> Supabase</li>
              <li><i className='bx bxl-mongodb'></i> MongoDB</li>
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* Cloud & DevOps */}
        <CardContainer className="inter-var">
          <CardBody className="skill-card bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-slate-900 border-2 border-blue-400 dark:border-blue-500/[0.3] shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-900/[0.2] transition-all duration-300 rounded-xl p-6">
            <CardItem translateZ="50" className="card-header text-blue-600 dark:text-blue-300">
              <i className='bx bx-cloud'></i> Cloud & DevOps
            </CardItem>
            <CardItem as="ul" translateZ="60" className="card-list text-slate-800 dark:text-slate-300 font-medium">
              <li className="highlight-text text-slate-900 dark:text-white drop-shadow-sm"><i className='bx bxl-docker'></i> Docker</li>
              <li><i className='bx bx-layer'></i> Docker Compose</li>
              <li><i className='bx bx-cog'></i> Jenkins</li>
              <li className="highlight-text text-slate-900 dark:text-white drop-shadow-sm"><i className='bx bxl-aws'></i> AWS EC2</li>
              <li><i className='bx bxl-git'></i> Git</li>
              <li><i className='bx bxl-github'></i> GitHub</li>
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* Core CS */}
        <CardContainer className="inter-var">
          <CardBody className="skill-card bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-slate-900 border-2 border-pink-400 dark:border-pink-500/[0.3] shadow-lg hover:shadow-pink-200 dark:hover:shadow-pink-900/[0.2] transition-all duration-300 rounded-xl p-6">
            <CardItem translateZ="50" className="card-header text-pink-600 dark:text-pink-300">
              <i className='bx bx-brain'></i> Core CS
            </CardItem>
            <CardItem as="ul" translateZ="60" className="card-list text-slate-800 dark:text-slate-300 font-medium">
              <li><i className='bx bx-network-chart'></i> DSA</li>
              <li><i className='bx bx-cube-alt'></i> OOP</li>
              <li><i className='bx bx-data'></i> DBMS</li>
              <li><i className='bx bx-desktop'></i> Operating Systems</li>
              <li><i className='bx bx-globe'></i> Computer Networks</li>
              <li><i className='bx bx-sitemap'></i> System Design Fundamentals</li>
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* Software Engineering Focus */}
        <CardContainer className="inter-var">
          <CardBody className="skill-card bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-slate-900 border-2 border-indigo-400 dark:border-indigo-500/[0.3] shadow-lg hover:shadow-indigo-200 dark:hover:shadow-indigo-900/[0.2] transition-all duration-300 rounded-xl p-6">
            <CardItem translateZ="50" className="card-header text-indigo-600 dark:text-indigo-300">
              <i className='bx bx-briefcase'></i> Software Engineering Focus
            </CardItem>
            <CardItem as="ul" translateZ="60" className="card-list text-slate-800 dark:text-slate-300 font-medium">
              <li><i className='bx bx-check-circle'></i> Backend Development</li>
              <li><i className='bx bx-check-circle'></i> REST API Design</li>
              <li><i className='bx bx-check-circle'></i> Authentication & Security</li>
              <li><i className='bx bx-check-circle'></i> Database Design</li>
              <li><i className='bx bx-check-circle'></i> Cloud Deployment</li>
              <li><i className='bx bx-check-circle'></i> CI/CD Workflows</li>
              <li><i className='bx bx-check-circle'></i> Problem Solving</li>
            </CardItem>
          </CardBody>
        </CardContainer>

      </div>
    </section>
  )
}

export default Skills

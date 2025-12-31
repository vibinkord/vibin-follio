import './Skills.css'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h1 className="section-title">Skills</h1>

      <div className="skills-grid">
        {/* Technical Skills */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gradient-to-br from-gray-50 to-gray-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.2] dark:bg-slate-900 dark:border-cyan-500/[0.3] border-2 border-cyan-400 w-auto sm:w-[30rem] h-auto rounded-xl p-6 shadow-lg hover:shadow-cyan-200 dark:hover:shadow-cyan-900 transition-all duration-300">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-700 dark:text-cyan-300 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-400"
            >
              💻 Technical Skills
            </CardItem>
            <CardItem
              as="div"
              translateZ="60"
              className="text-neutral-600 dark:text-neutral-300 space-y-3 mt-4"
            >
              <div className="skill">
                <span className="block font-semibold text-neutral-700 dark:text-neutral-200">HTML & CSS</span>
                <div className="bar bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-700 dark:to-blue-700">
                  <div style={{ width: '85%' }} className="bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                </div>
              </div>
              <div className="skill">
                <span className="block font-semibold text-neutral-700 dark:text-neutral-200">JavaScript</span>
                <div className="bar bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-700 dark:to-blue-700">
                  <div style={{ width: '75%' }} className="bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                </div>
              </div>
              <div className="skill">
                <span className="block font-semibold text-neutral-700 dark:text-neutral-200">React & Node.js</span>
                <div className="bar bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-700 dark:to-blue-700">
                  <div style={{ width: '65%' }} className="bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                </div>
              </div>
              <div className="skill">
                <span className="block font-semibold text-neutral-700 dark:text-neutral-200">Python / Java / C / C++</span>
                <div className="bar bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-700 dark:to-blue-700">
                  <div style={{ width: '70%' }} className="bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                </div>
              </div>
              <div className="skill">
                <span className="block font-semibold text-neutral-700 dark:text-neutral-200">SQL & MongoDB</span>
                <div className="bar bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-700 dark:to-blue-700">
                  <div style={{ width: '60%' }} className="bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                </div>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* Professional Skills */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gradient-to-br from-gray-50 to-gray-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.2] dark:bg-slate-900 dark:border-purple-500/[0.3] border-2 border-purple-400 w-auto sm:w-[30rem] h-auto rounded-xl p-6 shadow-lg hover:shadow-purple-200 dark:hover:shadow-purple-900 transition-all duration-300">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-700 dark:text-purple-300 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400"
            >
              🧠 Professional Skills
            </CardItem>
            <CardItem
              as="ul"
              translateZ="60"
              className="text-neutral-600 dark:text-neutral-300 space-y-2 list-inside mt-4"
            >
              <li className="flex items-start"><span className="text-purple-500 mr-2">▸</span>Problem Solving & Logical Thinking</li>
              <li className="flex items-start"><span className="text-purple-500 mr-2">▸</span>Adaptability & Continuous Learning</li>
              <li className="flex items-start"><span className="text-purple-500 mr-2">▸</span>Team Collaboration</li>
              <li className="flex items-start"><span className="text-purple-500 mr-2">▸</span>Time Management</li>
              <li className="flex items-start"><span className="text-purple-500 mr-2">▸</span>Attention to Detail</li>
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* Communication */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gradient-to-br from-gray-50 to-gray-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.2] dark:bg-slate-900 dark:border-emerald-500/[0.3] border-2 border-emerald-400 w-auto sm:w-[30rem] h-auto rounded-xl p-6 shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900 transition-all duration-300">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-700 dark:text-emerald-300 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400"
            >
              🗣 Communication
            </CardItem>
            <CardItem
              as="ul"
              translateZ="60"
              className="text-neutral-600 dark:text-neutral-300 space-y-2 list-inside mt-4"
            >
              <li className="flex items-start"><span className="text-emerald-500 mr-2">▸</span>Fluent in English</li>
              <li className="flex items-start"><span className="text-emerald-500 mr-2">▸</span>Basic proficiency in French</li>
              <li className="flex items-start"><span className="text-emerald-500 mr-2">▸</span>Clear and effective team communication</li>
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* Extracurricular */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gradient-to-br from-gray-50 to-gray-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.2] dark:bg-slate-900 dark:border-orange-500/[0.3] border-2 border-orange-400 w-auto sm:w-[30rem] h-auto rounded-xl p-6 shadow-lg hover:shadow-orange-200 dark:hover:shadow-orange-900 transition-all duration-300">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-700 dark:text-orange-300 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent dark:from-orange-400 dark:to-red-400"
            >
              🏀 Extracurricular
            </CardItem>
            <CardItem
              as="ul"
              translateZ="60"
              className="text-neutral-600 dark:text-neutral-300 space-y-2 list-inside mt-4"
            >
              <li className="flex items-start"><span className="text-orange-500 mr-2">▸</span>Basketball Player</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">▸</span>Fitness & Gym Training</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">▸</span>Gaming Enthusiast</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">▸</span>High Jump Athlete</li>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  )
}

export default Skills

// imports
import projects from '../../../assets/projects.json' // json file containing project details
import Project from './Project'
import './Portfolio.css'

// exports
export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio-title'>Portfolio</h2>

      {/* Where project cards will get dynamically rendered */}
      <div className='projects'>
        {/* mapping over projects array */}
        {projects.map((project, i) => (
          // Project component that will render multiple times
          <Project project={project} key={i} />

        ))}
      </div>
    </section>
  )
}
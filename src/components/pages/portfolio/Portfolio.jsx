import projects from '../../../assets/projects.json'
import Project from './Project'
import './Portfolio.css'

export default function Portfolio() {

  return (
    <section className='portfolio'>
      <h2 className='portfolio-title'>Portfolio</h2>
      <div className='projects'>
        {projects.map((project, i) => (
          
          <Project project={project} key={i} />

        ))}
      </div>
    </section>
  )
}
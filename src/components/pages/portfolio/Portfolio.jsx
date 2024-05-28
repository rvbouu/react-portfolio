import projects from '../../../assets/projects.json'
import './Portfolio.css'

export default function Portfolio() {

  return (
    <section className='portfolio'>
      {projects.map(project => (
        <div className='project' key={project.id} style={{ backgroundImage: `url(${project.image})`, backgroundRepeat: 'no-repeat' }}>
          <a href={project.liveLink} target='_blank'>
            <h1 className='title'>{project.title}</h1>
          </a>
          <a href={project.github} target='_blank'>
            <img 
          </a>
        </div>
      ))}
    </section>
  )
}
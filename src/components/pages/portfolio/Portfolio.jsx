import projects from '../../../assets/projects.json'
import './Portfolio.css'

export default function Portfolio(){

  return(
    <section className='portfolio'>
      {projects.map(project => (
      <div className='project' style={{backgroundImage: `url(${project.image})`, backgroundRepeat: 'no-repeat'}}>
        <h1>{project.title}</h1>
      </div>
      ))}
    </section>
  )
}
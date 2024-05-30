// exports
export default function Project({ project }) {
  return (
    // one project card template that sets project img as background
    <div className='projectcard' style={{ backgroundImage: `url(${project.image})`, backgroundRepeat: 'no-repeat' }}>
      <div className='links'>

        {/* Live link to project */}
        <a href={project.liveLink} target='_blank'>
          <h3 className='title'>{project.title}</h3>
        </a>

        {/* GitHub Repository link for project */}
        <a href={project.github} target='_blank'>
          <img src='/social_imgs/github.png' alt='github logo' id='github-logo' />
        </a>
      </div>

      {/* short description for project */}
      <p className='desc'>{project.description}</p>
    </div>
  )
}
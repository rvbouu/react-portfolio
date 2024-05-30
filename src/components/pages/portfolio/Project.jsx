export default function Project({project}){
  return (
    <div className='projectcard' style={{ backgroundImage: `url(${project.image})`, backgroundRepeat: 'no-repeat' }}>
      <div className='links'>
        <a href={project.liveLink} target='_blank'>
          <h3 className='title'>{project.title}</h3>
        </a>
        <a href={project.github} target='_blank'>
          <img src='/social_imgs/github.png' alt='github logo' id='github-logo' />
        </a>
      </div>
      <p className='desc'>{project.description}</p>
    </div>
  )
}
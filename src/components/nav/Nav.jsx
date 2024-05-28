import {Link} from 'react-router-dom'

export default function Nav(){
  return(
    <nav className='navbar'>
      <div>
        <Link to='/about'>About</Link>
      </div>
      <div>
        <Link to='/portfolio'>Portfolio</Link>
      </div>
      <div>
        <Link to='/contact'>Contact</Link>
      </div>
      <div>
        <Link to='/resume'>Resumé</Link>
      </div>
    </nav>
  )
}
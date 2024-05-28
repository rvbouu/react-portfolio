import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav className='navbar'>
      <Link to='/about' className='navEl'>About</Link>
      <Link to='/portfolio' className='navEl'>Portfolio</Link>
      <Link to='/contact' className='navEl'>Contact</Link>
      <Link to='/resume' className='navEl'>Resumé</Link>
    </nav>
  )
}
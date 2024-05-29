import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav className='navbar'>
      <NavLink to='/' style={({ isActive }) => {
        return isActive ? { textShadow: '0 0 5px magenta' } : {};
      }} className='navEl' >About</NavLink>
      <NavLink to='/portfolio' style={({ isActive }) => {
        return isActive ? { textShadow: '0 0 5px magenta' } : {};
      }} className='navEl'>Portfolio</NavLink>
      <NavLink to='/contact' style={({ isActive }) => {
        return isActive ? { textShadow: '0 0 5px magenta' } : {};
      }} className='navEl'>Contact</NavLink>
      <NavLink to='/resume' style={({ isActive }) => {
        return isActive ? { textShadow: '0 0 5px magenta' } : {};
      }} className='navEl'>Resumé</NavLink>
    </nav>
  )
}
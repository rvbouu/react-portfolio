// imports
import { NavLink } from 'react-router-dom'; // using NavLink instead of Link because NavLink has the isActive property for styling
import './Nav.css';

// exports
export default function Nav() {
  return (
    <nav className='navbar'>
      {/* NavLink for linking different components in navbar; each one has isActive for styling when on page */}

      {/* Home/About page */}
      <NavLink to='/' style={({ isActive }) => {
        return isActive ? { textShadow: '0 0 5px magenta' } : {};
      }} className='navEl' >About</NavLink>
      
      {/* Portfolio page */}
      <NavLink to='/portfolio' style={({ isActive }) => {
        return isActive ? { textShadow: '0 0 5px magenta' } : {};
      }} className='navEl'>Portfolio</NavLink>
      
      {/* Contact page */}
      <NavLink to='/contact' style={({ isActive }) => {
        return isActive ? { textShadow: '0 0 5px magenta' } : {};
      }} className='navEl'>Contact</NavLink>
      
      {/* Resume page */}
      <NavLink to='/resume' style={({ isActive }) => {
        return isActive ? { textShadow: '0 0 5px magenta' } : {};
      }} className='navEl'>Resumé</NavLink>
    </nav>
  )
}
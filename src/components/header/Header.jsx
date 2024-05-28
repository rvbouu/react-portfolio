import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';
import 'animate.css'
import './Header.css'

export default function Header() {
  return (
    <header className='header'>
      <Link to='/' className='header-logo'>
        <div className='animate__animated animate__slideInRight animate__slower animate'>
          <img src='/rvb_logo.PNG' alt='personal logo' id='rvb-logo' />
        </div>
        <div className='reveal'>
          <h1 className='vanessa'>Vanessa Bou<span className='reveal-bg'></span></h1>
        </div>
      </Link>
      <Nav />
    </header>
  )
}
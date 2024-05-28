import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';
import './Header.css'

export default function Header() {
  return (
    <header className='header'>
      <div className='reveal'>
        <h1 className='vanessa'>Vanessa<span className='reveal-bg'></span></h1>
      </div>
      <Nav />
    </header>
  )
}
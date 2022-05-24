import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <NavLink to="/" className='nav-link nav-item'>
        Home
      </NavLink>
      <NavLink to="/battle" className='nav-link nav-item'>
        Battle
      </NavLink>
      <NavLink to="/gallery" className='nav-link nav-item'>
        Gallery
      </NavLink>
      <NavLink to="/upload" className='nav-link nav-item'>
        Upload
      </NavLink>
    </nav>
  )
}

export default Navbar

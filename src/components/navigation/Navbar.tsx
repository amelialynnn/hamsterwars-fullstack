import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='nav-item'>
        <Link to="/" className='nav-link' >Home</Link>
      </div>
      <div className='nav-item'>
        <Link to="/battle"  className='nav-link'>Battle</Link>
      </div>
      <div className='nav-item'>
        <Link to="/gallery"  className='nav-link'>Gallery</Link>
      </div>
      <div className='nav-item'>
        <Link to="/upload"  className='nav-link'>Upload</Link>
      </div>
    </nav>
  )
}

export default Navbar

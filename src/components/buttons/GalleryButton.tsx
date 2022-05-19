import { Link } from 'react-router-dom'

const GalleryButton = () => {
  return (
    <div className='gallery-btn-container'>
      <Link to="/upload"><button className='gallery-btn'>Add new hamster</button></Link>
    </div>
  )
}

export default GalleryButton

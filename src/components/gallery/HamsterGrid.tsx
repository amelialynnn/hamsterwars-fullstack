import { Link, Routes, Route } from 'react-router-dom'

import HamsterCard from './hamsterCard'

const HamsterGrid = () => {
  return (
    <>
    <h2>Hamster Gallery</h2>
    {/* import hamsterCard and loop through to display */ }
    <Link to="/upload"><button>Add new hamster</button></Link>
    {/* add new hamster leder till: /upload */}
    </>
  )
}

export default HamsterGrid

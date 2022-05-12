import { Link } from 'react-router-dom'

import './Battle.css'

import HamsterOne from '../hamstercards/HamsterOne'

const BattleView = () => {
  return (
    <section className='battle-container'>
      <h2>Let the battle begin!</h2>
      <HamsterOne />
      <Link to='/battle/winner'><img src="" alt="Bild på hamster 1" /> </Link>
      <Link to='/battle/winner'><img src="" alt="Bild på hamster 2" /></Link>
      <p>Click on the cutest hamster</p>
    </section>
  )
}

export default BattleView

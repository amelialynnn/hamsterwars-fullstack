import { Link } from 'react-router-dom'

const BattleView = () => {
  return (
    <>
      <h2>Let the battle begin!</h2>
      <Link to='/battle/winner'><img src="" alt="Bild på hamster 1" /> </Link>
      <Link to='/battle/winner'><img src="" alt="Bild på hamster 2" /></Link>
      <p>Click on the cutest hamster</p>
      {/* röstningen leder till: /battle/winner */}
      {/* Ev ska det vara Link här istället för Routs */}
    </>
  )
}

export default BattleView

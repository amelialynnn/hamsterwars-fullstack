import { Link } from 'react-router-dom'

const WinnerView = () => {
  return (
    <>
    <h2>The winner is NAMN</h2>
    <img src="" alt="bild på vinnare" />
    {/* Knappen leder tillbaka till BattleView /battle */}
    {/* Hamster - GeneralCard */}
    <Link to='/battle'>
      <button>Start new battle</button>
    </Link>
    </>
  )
}

export default WinnerView

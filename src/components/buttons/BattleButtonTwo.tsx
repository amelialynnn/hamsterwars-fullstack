import { Link } from 'react-router-dom'

const BattleButtonTwo = () => {
  return (
    <Link to='/battle' className='btn-two-container'>
      <button className='btn-two'>Start new battle</button>
    </Link>
  )
}

export default BattleButtonTwo

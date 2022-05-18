import { Link } from 'react-router-dom'

import './Buttons.css'

const BattleButtonOne = () => {
  return(
    <div className='btn-one-container'>
      <Link to="/battle" ><button className='btn-one'>Start new battle</button></Link>
    </div>
  )
}

export default BattleButtonOne

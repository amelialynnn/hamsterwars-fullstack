import { Link } from 'react-router-dom'

import './Buttons.css'

const ButtonOne = () => {
  return(
    <div className='b-one-container'>
      <Link to="/battle" ><button>Start new battle</button></Link>
    </div>
  )
}

export default ButtonOne

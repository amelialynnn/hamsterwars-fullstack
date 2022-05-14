import { Link } from 'react-router-dom'

import './Buttons.css'

const PrimaryButton = () => {
  return(
    <div className='b-primary-container'>
      <Link to="/battle" ><button>Start new battle</button></Link>
    </div>
  )
}

export default PrimaryButton

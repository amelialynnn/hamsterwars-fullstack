import { Link } from 'react-router-dom'

import './CutestHamster.css'

const CutestHamster = () => {
  return (
    <section className='cutest-hamster'>
      <h4>Cutest hamster right now!</h4>
      <div className='cutest-container'>
        <div className='cute-section'>
          <img src="../../../backend/public/img/hamster-3.jpg" alt="Bild på sötsate hamstern" />
          <p>Svea</p>
        </div>
        <div className='cute-section'>
          <button><Link to="/battle" >Start new battle</Link></button>
        </div>
      </div>
     </section>
  )
}

export default CutestHamster

import './CutestHamster.css'
import HamsterOne from '../hamstercards/HamsterOne'
import ButtonOne from '../buttons/ButtonOne'

const CutestHamster = () => {
  return (
    <section className='cutest-hamster'>
      <h4>Cutest hamster right now!</h4>
      <div className='cutest-container'>
        <HamsterOne />
        <ButtonOne />
      </div>
     </section>
  )
}

export default CutestHamster

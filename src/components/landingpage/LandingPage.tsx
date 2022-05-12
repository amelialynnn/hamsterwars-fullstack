import CutestHamster from '../cutest/CutestHamster'

import './Landing.css'

const LandingPage = () => {
  return (
    <section className='landing-section'>
      <div className='landing-container'>
        <h2>Welcome!</h2>
        <h3>Let's play hamster wars</h3>
        <p className='p-landing'>In this application you can vote for the cutest hamster, upload new hamsters ready for battle or just browse through cute hamsters in the gallery.</p>
        <CutestHamster />
      </div>
    </section>
  )
}

export default LandingPage

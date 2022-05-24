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
        <p className='intro-project'>This project is part of the course "Fullstack Development" included in the Frontend Development Program at IT-Högskolan in Gothenburg. In this project, frontend and backend development have been combined with React on the frontend side and Node.js, Express and cloud database Google Firestore on the backend side. I hope you like it! <span className='name-sign'>// Amelia</span></p>
      </div>
    </section>
  )
}

export default LandingPage

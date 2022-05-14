import './HeaderBanner.css'

import HamsterVector from './hamster-vector.png'

const HeaderBanner = () => {
  return(
    <section className="banner-container">
      <img src={HamsterVector} alt="hamster vector" />
      <div className='header-text'>
        <h1>Hamster
          <span>wars</span>
        </h1>
      </div>
      <a className='img-source-link' href='https://www.freepik.com/vectors/assortment'>Assortment vector created by pikisuperstar - www.freepik.com</a>
    </section>
  )
}

export default HeaderBanner

import './HeaderBanner.css'


const HeaderBanner = () => {
  return(
    <section className="banner-container">
      <img src="../../../src/images/hamster-vector.png" alt="hamster vector" />
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

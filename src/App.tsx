import './App.css'

import { Routes, Route } from 'react-router-dom'

import HeaderBanner from './components/header/HeaderBanner'
import Navbar from './components/navigation/Navbar'
import LandingPage from './components/landingpage/LandingPage'
import BattleView from './components/battle/BattleView'
import HamsterGrid from './components/gallery/HamsterGrid'
import AddHamster from './components/upload/AddHamster'
import WinnerView from './components/battle/WinnerView'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className="app">
      <header>
        <HeaderBanner />
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/battle' element={<BattleView />} />
          <Route path='/gallery' element={<HamsterGrid />} />
          <Route path='/upload' element={<AddHamster />} />
          <Route path='/battle/winner' element={<WinnerView />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='*' element={<LandingPage />}></Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App

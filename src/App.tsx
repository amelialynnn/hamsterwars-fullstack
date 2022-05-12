import { useState, useEffect } from 'react'
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

  // gör interface för any
  // flytta till models
  interface Hamsters {
    id: string,
    name: string,
    age: number,
    wins: number,
    defeats: number,
    games: number,
    loves: string,
    favFood: string,
    imgName: string
  }

  const [data, setData] = useState<null | Hamsters[]>(null)

  useEffect(() => {
		async function getData() {
			const response: Response = await fetch('https://hamsterwar-solution.herokuapp.com/hamsters')
			const apiData: any = await response.json()
			console.log('Data from API:', apiData)
			// { results: [ { name, url } ] }
			setData(apiData)
		}
		getData()
	}, [])

  return (
    <div className="app">
      <header>
        <HeaderBanner />
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/battle' element={<BattleView />} />
          <Route path='/gallery' element={<HamsterGrid />} />
          <Route path='/upload' element={<AddHamster />} />
          <Route path='/battle/winner' element={<WinnerView />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
      {/*
      {data ? (data.map(hamster =>
        <>
        <div key={hamster.id}>
          <p>{hamster.name}</p>
          <img src={'../backend/public/img/' + hamster.imgName} alt="cute hamster" />
        </div>
        </>
        )): (<p>No data</p>)} */}
    </div>
  )
}

export default App

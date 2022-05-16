import { fixUrl } from '../../utils'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useRecoilState } from 'recoil'
import { WinnerAtom } from '../../atoms/WinnerAtom'

import { Hamster } from '../../models/Hamsters'

import BattleCard from '../hamstercards/BattleCard'

import './Battle.css'

const BattleView = () => {

  const [randomOne, setRandomOne] = useState<Hamster | null>(null)
  const [randomTwo, setRandomTwo] = useState<Hamster | null>(null)

  const [winner, setWinner] = useRecoilState(WinnerAtom)

  useEffect(() => {
    async function getData() {
			const response: Response = await fetch(fixUrl('/hamsters/random'))
			const apiData: Hamster = await response.json()
			setRandomOne(apiData)
		}
    getData()
  }, [])

  useEffect(() => {
    async function getData() {
			const response: Response = await fetch(fixUrl('/hamsters/random'))
			const apiData: Hamster = await response.json()
      setRandomTwo(apiData)
		}
    getData()
  }, [])

  return (
    <section className='battle-container'>
      <h2>Let the battle begin!</h2>
      <p className='battle-p'>Click on the cutest hamster</p>
      <div className='battle-section'>
          {randomOne ?
          (<Link to='/battle/winner' onClick={() => setWinner(randomOne)}><BattleCard randomHamster={randomOne} />
          </Link>) : 'no data'}
          <p className='vs'>vs</p>
          {randomTwo ?
          (<Link to='/battle/winner' onClick={() => setWinner(randomTwo)}><BattleCard randomHamster={randomTwo}/>
          </Link>) : 'no data'}
      </div>
    </section>
  )
}

export default BattleView

// TODO:
// 1. DONE Fixa layout /battle
// 2. Uppdatera firebase matches och hamsterobject
// 3. I battle ska ej kunna komma samma hamster
// 4. Fixa så ej laddar dubbelt - ev fråga om hjälp

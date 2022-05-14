import { fixUrl } from '../../utils'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Hamster } from '../../models/Hamsters'

import BattleCard from '../hamstercards/BattleCard'

import './Battle.css'

const BattleView = () => {

  const [randomOne, setRandomOne] = useState<Hamster | null>(null)
  const [randomTwo, setRandomTwo] = useState<Hamster | null>(null)

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
      {randomOne ? (<Link to='/battle/winner'><BattleCard randomHamster={randomOne}/></Link>) : 'no data'}
      {randomTwo ? (<Link to='/battle/winner'><BattleCard randomHamster={randomTwo}/></Link>) : 'no data'}
      <p>Click on the cutest hamster</p>
    </section>
  )
}

export default BattleView

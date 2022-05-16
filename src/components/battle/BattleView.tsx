import { fixUrl } from '../../utils'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useRecoilState } from 'recoil'
import { WinnerAtom } from '../../atoms/BattleAtom'

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

      if (randomOne === apiData) {
        getData()
      } else {
        setRandomTwo(apiData)
      }
		}
    getData()
  }, [])


  const handleBattle = (winner: Hamster, loser: Hamster) => {
    fetch(fixUrl(`/hamsters/${winner.id}`), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        wins: winner.wins + 1
       })
    })

    fetch(fixUrl(`/hamsters/${loser.id}`), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        defeats: loser.defeats + 1
       })
    })

    fetch(fixUrl('/matches'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        winnerId: winner.id,
        loserId: loser.id
       })
    })
  }

  return (
    <section className='battle-container'>
      <h2>Let the battle begin!</h2>
      <p className='battle-p'>Click on the cutest hamster</p>
      <div className='battle-section'>
          {randomOne && randomTwo ?
          (<Link to='/battle/winner' onClick={() => {setWinner(randomOne); handleBattle(randomOne, randomTwo)}}><BattleCard randomHamster={randomOne} />
          </Link>) : 'no data'}
          <p className='vs'>vs</p>
          {randomTwo && randomOne ?
          (<Link to='/battle/winner' onClick={() => {setWinner(randomTwo); handleBattle(randomTwo, randomOne)}}><BattleCard randomHamster={randomTwo}/>
          </Link>) : 'no data'}
      </div>
    </section>
  )
}

export default BattleView

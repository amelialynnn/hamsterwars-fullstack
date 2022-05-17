import { fixUrl } from '../../utils'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useRecoilState } from 'recoil'
import { WinnerAtom, LoserAtom } from '../../atoms/BattleAtom'

import { Hamster } from '../../models/Hamsters'

import BattleCard from '../hamstercards/BattleCard'

import './Battle.css'

const BattleView = () => {

  const [firstHamster, setFirstHamster] = useState<Hamster | null>(null)
  const [secondHamster, setSecondHamster] = useState<Hamster | null>(null)

  const [winner, setWinner] = useRecoilState(WinnerAtom)
  const [loser, setLoser] = useRecoilState(LoserAtom)

  useEffect(() => {
    async function getFirstContender() {
			const response: Response = await fetch(fixUrl('/hamsters/random'))
			const HamsterData: Hamster = await response.json()
			setFirstHamster(HamsterData)
		}
    getFirstContender()

    async function getSecondContender() {
			const response: Response = await fetch(fixUrl('/hamsters/random'))
			const HamsterData: Hamster = await response.json()

      if (firstHamster?.id === HamsterData.id) {
        getSecondContender()
      } else {
        setSecondHamster(HamsterData)
      }
		}
    getSecondContender()
  }, [])

  const handleBattle = (winner: Hamster, loser: Hamster) => {
    setLoser(loser)
    setWinner(winner)

    fetch(fixUrl(`/hamsters/${winner.id}`), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        wins: winner.wins + 1,
        games: winner.games + 1
       })
    })

    fetch(fixUrl(`/hamsters/${loser.id}`), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        defeats: loser.defeats + 1,
        games: loser.games + 1
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
          {firstHamster && secondHamster ?
          (<Link to='/battle/result' onClick={() => handleBattle(firstHamster, secondHamster)}><BattleCard randomHamster={firstHamster} />
          </Link>) : 'no data'}
          <p className='vs'>vs</p>
          {secondHamster && firstHamster ?
          (<Link to='/battle/result' onClick={() => handleBattle(secondHamster, firstHamster)}><BattleCard randomHamster={secondHamster}/>
          </Link>) : 'no data'}
      </div>
    </section>
  )
}

export default BattleView

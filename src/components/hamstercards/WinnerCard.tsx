import { useRecoilState } from 'recoil'
import { WinnerAtom } from '../../atoms/BattleAtom'
import { useEffect, useState } from 'react'
import { fixUrl } from '../../utils'

import { Hamster } from '../../models/Hamsters'
import './WinnerLoserCards.css'

const WinnerCard = () => {
  const [winner, setWinner] = useRecoilState(WinnerAtom)
  const [updatedResult, setUpdatedResult] = useState< null | Hamster>(null)

  useEffect(()  => {
    async function getData() {
      const response: Response = await fetch(fixUrl(`/hamsters/${winner?.id}`))
			const apiData: Hamster = await response.json()
      setUpdatedResult(apiData)
    }
    getData()
  }, [])

  return (
    <div className='.result-card-container'>
      <h2>The winner is {winner?.name}</h2>
      <img className='result-card-img' src={fixUrl(`/img/${winner?.imgName}`)} alt="winning hamster" />
      <p>{winner?.name} is {winner?.age} years old and looooves to eat {winner?.favFood} and {winner?.loves}.</p>
      <div>
        <p>Wins: {updatedResult?.wins}</p>
        <p>Defeats: {updatedResult?.defeats}</p>
        <p>Games: {updatedResult?.games}</p>
      </div>
    </div>
  )
}


export default WinnerCard

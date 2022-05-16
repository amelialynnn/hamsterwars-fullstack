import { useRecoilState } from 'recoil'
import { LoserAtom } from '../../atoms/BattleAtom'
import { useEffect, useState } from 'react'
import { fixUrl } from '../../utils'


import { Hamster } from '../../models/Hamsters'
import './WinnerLoserCards.css'

const LoserCard = () => {
  const [loser, setLoser] = useRecoilState(LoserAtom)
  const [updatedResult, setUpdatedResult] = useState< null | Hamster>(null)

  useEffect(()  => {
    async function getData() {
      const response: Response = await fetch(fixUrl(`/hamsters/${loser?.id}`))
			const apiData: Hamster = await response.json()
      console.log(apiData)
      setUpdatedResult(apiData)
    }
    getData()
  }, [])

  return (
    <div className='.result-card-container'>
      <h2>Better luck next time {loser?.name}</h2>
      <img className='result-card-img' src={fixUrl(`/img/${loser?.imgName}`)} alt="losing hamster"/>
      <p>{loser?.name} is {loser?.age} years old and looooves to eat {loser?.favFood} and {loser?.loves}.</p>
      <div>
        <p>Wins: {updatedResult?.wins}</p>
        <p>Defeats: {updatedResult?.defeats}</p>
        <p>Games: {updatedResult?.games}</p>
      </div>
    </div>
  )
}

export default LoserCard

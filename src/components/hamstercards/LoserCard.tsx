import { useRecoilState } from 'recoil'
import { LoserAtom } from '../../atoms/BattleAtom'
import { useState } from 'react'
import { fixUrl } from '../../utils'


import { Hamster } from '../../models/Hamsters'
import './WinnerLoserCards.css'

const LoserCard = () => {
  const [loser, setLoser] = useRecoilState(LoserAtom)
  const [updateLoser, setUpdateLoser] = useState< null | Hamster>(null)

  if (updateLoser === null) {
    if (loser) {
      setUpdateLoser({...loser, defeats: (loser.defeats + 1), games: (loser.games + 1) })
    }
  }

  return (
    <div className='.result-card-container'>
      <h2>Better luck next time {updateLoser?.name}</h2>
      <img className='result-card-img' src={fixUrl(`/img/${updateLoser?.imgName}`)} alt="losing hamster"/>
      <p>{updateLoser?.name} is {updateLoser?.age} years old and looooves to eat {updateLoser?.favFood} and {updateLoser?.loves}.</p>
      <div>
        <p>Wins: {updateLoser?.wins}</p>
        <p>Defeats: {updateLoser?.defeats}</p>
        <p>Games: {updateLoser?.games}</p>
      </div>
    </div>
  )
}

export default LoserCard

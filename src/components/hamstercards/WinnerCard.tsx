import { useRecoilState } from 'recoil'
import { WinnerAtom } from '../../atoms/BattleAtom'
import { useState } from 'react'
import { fixUrl } from '../../utils'

import { Hamster } from '../../models/Hamsters'
import './WinnerLoserCards.css'

const WinnerCard = () => {
  const [winner, setWinner] = useRecoilState(WinnerAtom)
  const [updateWinner, setUpdateWinner] = useState< null | Hamster>(null)

  if (updateWinner === null) {
    if (winner) {
      setUpdateWinner({...winner, wins: (winner.wins + 1), games: (winner.games + 1) })
    }
  }

  return (
    <div className='.result-card-container'>
      <h2>The winner is {updateWinner?.name}</h2>
      <img className='result-card-img' src={fixUrl(`/img/${updateWinner?.imgName}`)} alt="winning hamster" />
      <p>{updateWinner?.name} is {updateWinner?.age} years old and looooves to eat {updateWinner?.favFood} and {updateWinner?.loves}.</p>
      <div>
        <p>Wins: {updateWinner?.wins}</p>
        <p>Defeats: {updateWinner?.defeats}</p>
        <p>Games: {updateWinner?.games}</p>
      </div>
    </div>
  )
}


export default WinnerCard

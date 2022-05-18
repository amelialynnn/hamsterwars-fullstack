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
    <div className='result-card-container'>
      <h2>The winner is {updateWinner?.name}</h2>
      <div className='result-card reverse winner'>
        <img className='result-card-img' src={fixUrl(`/img/${updateWinner?.imgName}`)} alt="winning hamster" />
        <div className='r-card-text'>
          <p>{updateWinner?.name} is {updateWinner?.age} years old and looooves to eat {updateWinner?.favFood} and {updateWinner?.loves}.</p>
          <span className='r-highlight'>
            <p>Wins: {updateWinner?.wins}</p>
            <p>Defeats: {updateWinner?.defeats}</p>
            <p>Games: {updateWinner?.games}</p>
          </span>
        </div>
      </div>
    </div>
  )
}


export default WinnerCard

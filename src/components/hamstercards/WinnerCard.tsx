import './WinnerCard.css'
import { useRecoilState } from 'recoil'
import { WinnerAtom } from '../../atoms/WinnerAtom'

import { fixUrl } from '../../utils'
import { Hamster } from '../../models/Hamsters'

import BattleView from '../battle/BattleView'

const WinnerCard = () => {
  const [winner, setWinner] = useRecoilState(WinnerAtom)
  console.log('WinnerAtom', winner)

  return (
    <>
      {winner ? (
        <><h2>The winner is {winner.name}</h2><img src={fixUrl(`/img/${winner.imgName}`)} alt="bild på vinnare" /></>
      ) : <>
        <p>Yikes! Something went wrong...</p>
        </>}
    </>
  )
}


export default WinnerCard

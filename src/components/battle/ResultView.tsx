import { useRecoilState } from 'recoil'
import { WinnerAtom, LoserAtom } from '../../atoms/BattleAtom'

import WinnerCard from '../hamstercards/WinnerCard'
import LoserCard from '../hamstercards/LoserCard'
import BattleButtonTwo from '../buttons/BattleButtonTwo'

import './Result.css'

const ResultView = () => {
  const [winner, setWinner] = useRecoilState(WinnerAtom)
  const [loser, setLoser] = useRecoilState(LoserAtom)

  return (
    <section className='result-container'>
      {winner && loser ?
        <>
          <WinnerCard />
          <LoserCard />
        </> : (<p>Yikes! Something went wrong...</p>)
      }
       <BattleButtonTwo />
    </section>
  )
}

export default ResultView

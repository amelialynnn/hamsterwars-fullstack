import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { WinnerAtom, LoserAtom } from '../../atoms/BattleAtom'

import WinnerCard from '../hamstercards/WinnerCard'
import LoserCard from '../hamstercards/LoserCard'

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
          <Link to='/battle'>
            <button>Start new battle</button>
          </Link>
        </> : (<p>Yikes! Something went wrong...</p>)
      }
    </section>
  )
}

export default ResultView



/* När man har röstat ska mer information om hamstern visas, bland annat hur många vinster och förluster den har. (Det kan påverka hur man röstar!)

När användaren klickar för att rösta ska båda hamster-objekten uppdateras: vinnaren får +1 vinst och förloraren +1 förlust.

Nu ska du visa hur många vinster och förluster respektive hamster har. Användaren ska få möjligheten att starta en ny match, med två slumpade hamstrar. */
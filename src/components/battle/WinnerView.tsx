import { fixUrl } from '../../utils'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Hamster } from '../../models/Hamsters'

import WinnerCard from '../hamstercards/WinnerCard'

const WinnerView = () => {
  return (
    <>
    <WinnerCard />
    {/* Knappen leder tillbaka till BattleView /battle */}
    {/* See css i Hamster - GeneralCard */}
    <Link to='/battle'>
      <button>Start new battle</button>
    </Link>
    </>
  )
}

export default WinnerView



/* När man har röstat ska mer information om hamstern visas, bland annat hur många vinster och förluster den har. (Det kan påverka hur man röstar!)

När användaren klickar för att rösta ska båda hamster-objekten uppdateras: vinnaren får +1 vinst och förloraren +1 förlust. Nu ska du visa hur många vinster och förluster respektive hamster har. Användaren ska få möjligheten att starta en ny match, med två slumpade hamstrar. */

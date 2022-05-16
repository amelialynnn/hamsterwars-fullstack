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

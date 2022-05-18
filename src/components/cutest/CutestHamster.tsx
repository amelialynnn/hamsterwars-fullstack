import { fixUrl } from '../../utils'
import { useState, useEffect } from 'react'

import { Hamster } from '../../models/Hamsters'

import GeneralCard from '../hamstercards/GeneralCard'
import ErrorMessage from '../error/ErrorMessage'
import BattleButtonOne from '../buttons/BattleButtonOne'

import './CutestHamster.css'

const CutestHamster = () => {

  const [cutest, setCutest] = useState<Hamster[] | null>(null)

  useEffect(() => {
    async function getCutest() {
      try {
        const response: Response = await fetch(fixUrl('/hamsters/cutest'))
        const CutestData: Hamster[] = await response.json()

        if (CutestData.length > 1) {
          const randomCutest = []
          randomCutest.push(CutestData[Math.floor(Math.random() * CutestData.length)])
          setCutest(randomCutest)
          return
        } else {
          setCutest(CutestData)
        }
      } catch (error) {
        return error
      }
		}
    getCutest()
  }, [])

  return (
    <section className='cutest-hamster'>
      <h4>Cutest hamster right now!</h4>
      {cutest ? (<div className='cutest-container'>
        {cutest.map((cute) => (
          <GeneralCard key={cute.id} hamsterData={cute} />
        ))}
        <BattleButtonOne />
      </div>) : (
        <ErrorMessage setCutest={setCutest}/>)}
     </section>
  )
}

export default CutestHamster

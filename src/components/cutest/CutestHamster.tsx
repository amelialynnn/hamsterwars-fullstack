import { fixUrl } from '../../utils'
import { useState, useEffect } from 'react'

import { Hamster } from '../../models/Hamsters'

import GeneralCard from '../hamstercards/GeneralCard'
import ErrorMessage from '../error/ErrorMessage'
import StartBattleButton from '../buttons/StartBattleButton'

import './CutestHamster.css'

const CutestHamster = () => {

  const [cutest, setCutest] = useState<Hamster[] | null>(null)

  useEffect(() => {
    async function getData() {
			const response: Response = await fetch(fixUrl('/hamsters/cutest'))
			const apiData: Hamster[] = await response.json()

      if (apiData.length > 1) {
        const randomCutest = []
        randomCutest.push(apiData[Math.floor(Math.random() * apiData.length)])
        setCutest(randomCutest)
        return
      } else {
        setCutest(apiData)
      }
      return
		}
    getData()
  }, [])

  return (
    <section className='cutest-hamster'>
      <h4>Cutest hamster right now!</h4>
      {cutest ? (<div className='cutest-container'>
        {cutest.map((cute) => (
          <GeneralCard key={cute.id} hamsterData={cute} />
        ))}
        <StartBattleButton />
      </div>) : (
        <ErrorMessage setCutest={setCutest}/>)}
     </section>
  )
}

export default CutestHamster

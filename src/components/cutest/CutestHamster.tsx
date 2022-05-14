import { fixUrl } from '../../utils'
import { useState, useEffect } from 'react'

import { Hamster } from '../../models/Hamsters'

import GeneralCard from '../hamstercards/GeneralCard'
import PrimaryButton from '../buttons/PrimaryButton'

import './CutestHamster.css'

const CutestHamster = () => {

  const [cutest, setCutest] = useState<Hamster | null>(null)

  useEffect(() => {
    async function getData() {
			const response: Response = await fetch(fixUrl('/hamsters/cutest'))
			const apiData: Hamster = await response.json()
			setCutest(apiData)
		}
    getData()
  }, [])

  return (
    <section className='cutest-hamster'>
      <h4>Cutest hamster right now!</h4>
      <div className='cutest-container'>
        {cutest ?
        (<GeneralCard hamsterData={cutest} />) : 'Loading...'}
        <PrimaryButton />
      </div>
     </section>
  )
}

export default CutestHamster

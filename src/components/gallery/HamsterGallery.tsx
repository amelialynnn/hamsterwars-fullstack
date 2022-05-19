import { fixUrl } from '../../utils'
import { useState, useEffect } from 'react'
import { Hamster } from '../../models/Hamsters'

import GeneralCard from '../hamstercards/GeneralCard'
import GalleryButton from '../buttons/GalleryButton'

import './HamsterGallery.css'

const HamsterGallery = () => {

  const [data, setData] = useState<Hamster[] | null>(null)

  useEffect(() => {
		async function getData() {
			//const response: Response = await fetch('https://hamsterwar-solution.herokuapp.com/hamsters')
			const response: Response = await fetch(fixUrl('/hamsters'))
			const apiData: Hamster[] = await response.json()
			setData(apiData)
		}
		getData()
	}, [])


  return (
    <section className='hamster-gallery'>
      <h2>Hamster Gallery</h2>
      <GalleryButton />
      {/* Möjlighet att ta bort hamser-knapp
      <button>Remove hamster</button>*/}
      <div className='hamster-wrapper'>
        {data ? (data.map(hamster =>
        <GeneralCard key={hamster.id} hamsterData={hamster} />)) : (<p>Yikes! Something went wrong...</p>)}
      </div>
    </section>
  )
}

export default HamsterGallery

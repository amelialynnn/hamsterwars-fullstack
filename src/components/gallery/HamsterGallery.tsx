import { fixUrl } from '../../utils'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { Hamster } from '../../models/Hamsters'

import { HamstersAtom } from '../../atoms/HamstersAtom'
import GeneralCard from '../hamstercards/GeneralCard'
import GalleryButton from '../buttons/GalleryButton'

import './HamsterGallery.css'

const HamsterGallery = () => {
  const [hamsters, setHamsters] = useRecoilState(HamstersAtom)

  useEffect(() => {
		async function getData() {
			const response: Response = await fetch(fixUrl('/hamsters'))
			const apiData: Hamster[] = await response.json()
      setHamsters(apiData)
		}
		getData()
	}, [])

  return (
    <section className='hamster-gallery'>
      <h2>Hamster Gallery</h2>
      <GalleryButton />
      <div className='hamster-wrapper'>
        {hamsters ? (hamsters.map(hamster =>
        <GeneralCard key={hamster.id} hamsterData={hamster} />)) : (<p className='gallery-error'>Yikes! Something went wrong...</p>)}
      </div>
    </section>
  )
}

export default HamsterGallery

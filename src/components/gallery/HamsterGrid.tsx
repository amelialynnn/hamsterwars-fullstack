import { fixUrl } from '../../utils'
import { useState, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { Hamster } from '../../models/Hamsters'

import GeneralCard from '../hamstercards/GeneralCard'

const HamsterGrid = () => {

  const [data, setData] = useState<Hamster[] | null>(null)

  useEffect(() => {
		async function getData() {
			//const response: Response = await fetch('https://hamsterwar-solution.herokuapp.com/hamsters')
			const response: Response = await fetch(fixUrl('/hamsters'))
			const apiData: Hamster[] = await response.json()
			console.log('Data from API:', apiData)
			// { results: [ { name, url } ] }
			setData(apiData)
		}
		getData()
	}, [])


  return (
    <>
    <h2>Hamster Gallery</h2>
    {/* <GeneralCard  hamsterData=""/> */}
    {/* import hamsterCard and loop through to display */ }

      {data ? (data.map(hamster =>
        <>
        <div key={hamster.id}>
          <p>{hamster.name}</p>
          <img src={fixUrl(`/img/${hamster.imgName}`)} alt="cute hamster" />
        </div>
        </>
        )): (<p>No data</p>)}
    <Link to="/upload"><button>Add new hamster</button></Link>
    {/* add new hamster leder till: /upload */}
    </>
  )
}

export default HamsterGrid

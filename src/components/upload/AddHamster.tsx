import { fixUrl } from '../../utils'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

import { HamstersAtom } from '../../atoms/HamstersAtom'
import { Hamster } from '../../models/Hamsters'

import './AddHamster.css'

const AddHamster = () => {
  const [hamsters, setHamsters] = useRecoilState(HamstersAtom)

  useEffect(() => {
    async function getData() {
      const response: Response = await fetch(fixUrl('/hamsters'))
      const apiData: Hamster[] = await response.json()
      setHamsters(apiData)
    }
    getData()
  }, [])

  const [name, setName] = useState<null | String>(null)
  const [age, setAge] = useState<null | Number>(null)
  const [favFood, setFaveFood] = useState<null | String>(null)
  const [loves, setLoves] = useState<null | String>(null)
  const [image, setImage] = useState<null | String>(null)

  const handleName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let input = event.target.value
    setName(input)
  }
  const handleAge = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let input = event.target.value
    setAge(Number(input))
  }
  const handleFavFood = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let input = event.target.value
    setFaveFood(input)
  }
  const handleLoves = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let input = event.target.value
    setLoves(input)
  }
  const handleImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let input = event.target.value
    setImage(input)
  }

  const nameIsValid = name !== ''
  const ageIsValid = Number(age) >= 0
  const favFoodIsValid = favFood !== ''
  const lovesIsValid = loves !== ''
  const imgNameIsValid = image !== ''
  const formIsValid = nameIsValid && ageIsValid && favFoodIsValid && lovesIsValid && imgNameIsValid

  const addNewHamster = () => {

    const newHamster = {
      name: name,
      age: Number(age),
      favFood: favFood,
      loves: loves,
      imgName: image,
      defeats: 0,
      wins: 0,
      games: 0
    }

    fetch(fixUrl('/hamsters'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newHamster)
    })
    console.log(hamsters)
  }

  return (
    <section className='add-hamster-container'>
      <h2>Add new hamster</h2>
      <form id="">
        <div className="">
          <label htmlFor="name">Name</label>
          <input className={`form-input ${!nameIsValid ? "error-input" : ""}`} onChange={handleName} type="text" name="name" />
          {!nameIsValid ? <p className='error-message'>Name is missing</p> : ''}
        </div>
        <div className="">
          <div className="">
            <label htmlFor="age">Age</label>
            <input className={`form-input ${!ageIsValid ? "error-input" : ""}`}  onChange={handleAge} type="text" name="age" />
            {!ageIsValid ? <p className='error-message'>Age is missing</p> : ''}
          </div>
        </div>
        <div className="">
          <div className="">
            <label htmlFor="fav-food">Favorite food</label>
            <input className={`form-input ${!favFoodIsValid ? "error-input" : ""}`} onChange={handleFavFood} type="text" name="fav-food" />
            {!favFoodIsValid ? <p className='error-message'>Favorite food is missing</p> : ''}
          </div>
        </div>
        <div className="">
          <div className="">
            <label htmlFor="loves">Loves</label>
            <input className={`form-input ${!lovesIsValid ? "error-input" : ""}`} onChange={handleLoves} type="text" name="loves" />
            {!lovesIsValid ? <p className='error-message'>Loves is missing</p> : ''}
          </div>
        </div>
        <div className="">
          <div className="">
            <label htmlFor="img">Image</label>
            <input className={`form-input ${!imgNameIsValid ? "error-input" : ""}`} onChange={handleImage} type="text" name="img" />
            {!imgNameIsValid ? <p className='error-message'>Image is missing</p> : ''}
          </div>
        </div>
      </form>
      <button disabled={formIsValid} onClick={addNewHamster}>Upload</button>
    </section>
  )
}

export default AddHamster


/* TODO
    - Fixa formIsValid
    - Styling
    - Skicka vidare till upload complete sida med hem hemknapp */

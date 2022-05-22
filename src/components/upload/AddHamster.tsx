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

  const [name, setName] = useState<String>('')
  const [age, setAge] = useState<null | Number>(null)
  const [favFood, setFavFood] = useState<String>('')
  const [loves, setLoves] = useState<String>('')
  const [imgName, setImgName] = useState<String>('')

  const [nameStatus, setNameStatus] = useState('')
  const [ageStatus, setAgeStatus] = useState('')
  const [favFoodStatus, setFavFoodStatus] = useState('')
  const [lovesStatus, setLovesStatus] = useState('')
  const [imgNameStatus, setImgNameStatus] = useState('')

  const [success, setSuccess] = useState<boolean>(false)
  const [fail, setFail] = useState<boolean>(false)

  const handleName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let input = event.target.value
    if (input !== '') {
      setName(input)
      setNameStatus('input-valid')
    } else {
      setName('')
      setNameStatus('input-fail')
    }
  }

  const handleAge = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let input = event.target.value
    if (Number(input)) {
      setAge(Number(input))
      setAgeStatus('input-valid')
    } else {
      setAge(null)
      setAgeStatus('input-fail')
    }
  }

  const handleFavFood = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let input = event.target.value
    if (input !== '') {
      setFavFood(input)
      setFavFoodStatus('input-valid')
    } else {
      setFavFood('')
      setFavFoodStatus('input-fail')
    }
  }

  const handleLoves = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let input = event.target.value
    if (input !== '') {
      setLoves(input)
      setLovesStatus('input-valid')
    } else {
      setLoves('')
      setLovesStatus('input-fail')
    }
  }
  const handleImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let input = event.target.value
    if (input !== '') {
      setImgName(input)
      setImgNameStatus('input-valid')
    } else {
      setImgName('')
      setImgNameStatus('input-fail')
    }
  }

  const addNewHamster = () => {

    const newHamster = {
      name: name,
      age: Number(age),
      favFood: favFood,
      loves: loves,
      imgName: imgName,
      defeats: 0,
      wins: 0,
      games: 0
    }

    if (name && age && favFood && loves && imgName) {
      try {
        fetch(fixUrl('/hamsters'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newHamster)
        })
        setSuccess(true)
        setFail(false)
      } catch (error) {
        setSuccess(false)
        return error
      }
    } else {
      setFail(true)
      setSuccess(false)
    }

  }

  return (
    <section className='add-hamster-section'>
      {success ?
      <p className='success-message'>Yay!! Your hamster has succesfully been uploaded!</p> :
      <>
        <h2>Add new hamster</h2>
        <div className='add-hamster-wrapper'>
          <form className='add-form-container'>
             {fail ? <p className="error-message">Please fill in all fields to upload a hamster!</p> : '' }
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input
              className={nameStatus}
              onChange={handleName}
              type="text"
              name="name"/>
            </div>
            <div className="input-container">
              <label htmlFor="age">Age</label>
              <input
              className={ageStatus}
              onChange={handleAge}
              type="text"
              name="age" />
              {ageStatus === 'input-fail' ? <p className="error-message">Age has to be a number</p> : ''}
            </div>
            <div className="input-container">
              <label htmlFor="fav-food">Favorite food</label>
              <input
              className={favFoodStatus}
              onChange={handleFavFood}
              type="text"
              name="fav-food" />
            </div>
            <div className="input-container">
              <label htmlFor="loves">Hobby</label>
              <input
              className={lovesStatus}
              onChange={handleLoves}
              type="text"
              name="loves"  />
            </div>
            <div className="input-container">
              <label htmlFor="img">Image url</label>
              <input
              className={imgNameStatus}
              onChange={handleImage}
              type="text"
              name="img" />
            </div>
          </form>
            <button onClick={addNewHamster}>Upload </button>
        </div> </>}
      </section>
  )
}

export default AddHamster


/* TODO
    - DONE Fixa formIsValid
    - Styling
    - Skicka vidare till upload complete sida med hem hemknapp */

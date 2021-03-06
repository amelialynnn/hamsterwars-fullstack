import { useRecoilState } from 'recoil'

import { NameAtom, AgeAtom, FavFoodAtom, LovesAtom, ImgNameAtom } from '../../atoms/AddHamsterAtoms'
import { NameStatusAtom, AgeStatusAtom, FavFoodStatusAtom, LovesStatusAtom, ImgNameStatusAtom  } from '../../atoms/AddHamsterAtoms'

const HandleInput = () => {

  const [name, setName] = useRecoilState(NameAtom)
  const [age, setAge] = useRecoilState(AgeAtom)
  const [favFood, setFavFood] = useRecoilState(FavFoodAtom)
  const [loves, setLoves] = useRecoilState(LovesAtom)
  const [imgName, setImgName] = useRecoilState(ImgNameAtom)

  const [nameStatus, setNameStatus] = useRecoilState(NameStatusAtom)
  const [ageStatus, setAgeStatus] = useRecoilState(AgeStatusAtom)
  const [favFoodStatus, setFavFoodStatus] = useRecoilState(FavFoodStatusAtom)
  const [lovesStatus, setLovesStatus] = useRecoilState(LovesStatusAtom)
  const [imgNameStatus, setImgNameStatus] = useRecoilState(ImgNameStatusAtom)

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
    let regex = /^[0-9]{0,2}$/

    if (input !== '' && input.match(regex)) {
      setAge(input)
      setAgeStatus('input-valid')
    }  else {
      setAge('')
      setAgeStatus('input-fail')
    }
  }

  const handleFavFood = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let input = event.target.value
    let regex = /^[a-z\s]+$/

    if (input !== '' && input.match(regex)) {
      setFavFood(input)
      setFavFoodStatus('input-valid')
    } else {
      setFavFood('')
      setFavFoodStatus('input-fail')
    }
  }

  const handleLoves = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let input = event.target.value
    let regex = /^[a-z\s]+$/

    if (input !== '' && input.match(regex)) {
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

  return (
    <>
    <div className="add-input-container">
      <label htmlFor="name">Name</label>
      <input
      value={name}
      className={nameStatus}
      onChange={handleName}
      type="text"
      name="name"/>
      {nameStatus === 'input-fail' ? <p className="input-error-message">Name is required</p> : ''}
    </div>
    <div className="add-input-container">
      <label htmlFor="age">Age</label>
      <input
      value={age}
      className={ageStatus}
      onChange={handleAge}
      type="text"
      name="age" />
      {ageStatus === 'input-fail' ? <p className="input-error-message">Age has to be an integer between 0 to 99 </p> : ''}
    </div>
    <div className="add-input-container">
      <label htmlFor="fav-food">Favorite food</label>
      <input
      value={favFood}
      className={favFoodStatus}
      onChange={handleFavFood}
      type="text"
      name="fav-food" />
      {favFoodStatus === 'input-fail' ? <p className="input-error-message">Only lowercase characters a-z</p> : ''}
    </div>
    <div className="add-input-container">
      <label htmlFor="loves">Hobby</label>
      <input
      value={loves}
      className={lovesStatus}
      onChange={handleLoves}
      type="text"
      name="loves"  />
      {lovesStatus === 'input-fail' ? <p className="input-error-message">Only lowercase characters a-z</p> : ''}
    </div>
    <div className="add-input-container">
      <label htmlFor="img">Image url</label>
      <input
      value={imgName}
      className={imgNameStatus}
      onChange={handleImage}
      type="text"
      name="img" />
      {imgNameStatus  === 'input-fail' ? <p className="input-error-message">Image url is required</p> : ''}
    </div>
    </>
  )
}

export default HandleInput

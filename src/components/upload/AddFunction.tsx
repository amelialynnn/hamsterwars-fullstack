import { fixUrl } from '../../utils'
import { useRecoilState } from 'recoil'

import { NameAtom, AgeAtom, FavFoodAtom, LovesAtom, ImgNameAtom } from '../../atoms/AddHamsterAtoms'

import { SuccessAtom, FailAtom } from '../../atoms/AddHamsterAtoms'

const AddFunction = () => {
  const [name, setName] = useRecoilState(NameAtom)
  const [age, setAge] = useRecoilState(AgeAtom)
  const [favFood, setFavFood] = useRecoilState(FavFoodAtom)
  const [loves, setLoves] = useRecoilState(LovesAtom)
  const [imgName, setImgName] = useRecoilState(ImgNameAtom)

  const [success, setSuccess] = useRecoilState(SuccessAtom)
  const [fail, setFail] = useRecoilState(FailAtom)

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

        setName('')
        setAge('')
        setFavFood('')
        setLoves('')
        setImgName('')
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
    <button onClick={addNewHamster}>Upload </button>
  )

}

export default AddFunction

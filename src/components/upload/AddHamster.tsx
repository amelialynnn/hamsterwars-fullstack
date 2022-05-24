import { fixUrl } from '../../utils'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import AddFunction from './AddFunction'
import HandleInput from './HandleInput'

import { HamstersAtom } from '../../atoms/HamstersAtom'
import { SuccessAtom, FailAtom } from '../../atoms/AddHamsterAtoms'

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

  const [success, setSuccess] = useRecoilState(SuccessAtom)
  const [fail, setFail] = useRecoilState(FailAtom)


  //här skulle den varit

  return (
    <section className='add-hamster-section'>
      <h2>Add new hamster</h2>
      <div className='add-hamster-container'>
        <form className='add-form'>
          {fail ? <p className="add-error-message">Please fill in all fields to upload a hamster!</p> : '' }
          {success ? <p className='add-success-message'>Yay!! Your hamster has succesfully been uploaded!</p> : '' }
          <HandleInput />
        </form>
       <AddFunction />
      </div>
    </section>
  )
}

export default AddHamster

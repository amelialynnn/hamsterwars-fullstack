import { fixUrl, fixImageUrl } from '../../utils'
import { useState } from 'react'
import { useRecoilState } from 'recoil'

import { HamstersAtom } from '../../atoms/HamstersAtom'
import { Hamster } from '../../models/Hamsters'

import HamsterPopup from './HamsterPopup'
import './GeneralCard.css'

interface Props {
  hamsterData: Hamster
}

const GeneralCard = ({ hamsterData }: Props) => {
  const [hamsters, setHamsters] = useRecoilState(HamstersAtom)

  const [hamsterInfo, setHamsterInfo] = useState('general-card-p')
  const [removeWarning, setRemoveWarning] = useState('hide-waring')

  const deleteHamster = () => {
    setRemoveWarning('show-waring')
    setHamsterInfo('hide-general-p')
  }
  const cancelDelete = () => {
    setRemoveWarning('hide-waring')
    setHamsterInfo('general-card-p')
  }

  const approvedDelete = (id: String) => {
    fetch(fixUrl(`/hamsters/${id}`), {
      method: 'DELETE',
    })

    if (hamsters) {
      let updatedHamsters = [...hamsters].filter((hamster) => {
        return hamster.id !== id;
      })
      setHamsters(updatedHamsters)
    }
  }

  return (
    <>
    {hamsterData ?
      (<div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={fixImageUrl(hamsterData.imgName)} alt="Cute hamster" className="general-card-img" />
            <p className='general-card-p' >{hamsterData.name}</p>
          </div>
          <div className="flip-card-back">
            <div>
              <HamsterPopup />
            </div>
            <h1 className={hamsterInfo}>{hamsterData.name} </h1>
            <div className={hamsterInfo}>
              <p>Age: {hamsterData.age} years old</p>
              <p>Favorite food: {hamsterData.favFood}</p>
              <p>Loves: {hamsterData.loves}</p>
              <p>Wins: {hamsterData.wins}</p>
              <p>Defeats: {hamsterData.defeats}</p>
              <p>Games: {hamsterData.games}</p>
              <button onClick={deleteHamster} className='remove-hamster'>Remove<i className="bi bi-trash3"></i></button>
            </div>
            <div className={removeWarning}>
              <p>Are you sure you want to delete {hamsterData.name}?</p>
              <div className='final-remove'>
                <button onClick={() => approvedDelete((hamsterData.id))}>Yes!</button>
                <button onClick={cancelDelete}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>)  : <p>Loading...</p>}
    </>
  )
}
export default GeneralCard

import { fixUrl } from '../../utils'
import { useState } from 'react'

import { Hamster } from '../../models/Hamsters'

import './GeneralCard.css'


interface Props {
  hamsterData: Hamster
}

const GeneralCard = ({ hamsterData }: Props) => {

  const [hamsterInfo, setHamsterInfo] = useState('general-card-p')
  const [removeWarning, setRemoveWarning] = useState('hide-waring')

  const deleteHamster = () => {
    setRemoveWarning('show-waring')
    setHamsterInfo('hide-general-info')
  }
  const cancelDelete = () => {
    setRemoveWarning('hide-waring')
    setHamsterInfo('general-card-p')
  }

  const approvedDelete = (id: String) => {
    fetch(fixUrl(`/hamsters/${id}`), {
      method: 'DELETE',
    })
    alert(`deleted ${id}`)
  }

  return (
    <>
    {hamsterData ?
      (<div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={fixUrl(`/img/${hamsterData.imgName}`)} alt="Cute hamster" className="general-card-img" />
            <p className='general-card-p' >{hamsterData.name}</p>
          </div>
          <div className="flip-card-back">
            <h1>{hamsterData.name}</h1>
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
              <button onClick={() => approvedDelete((hamsterData.id))}>Yes!</button>
              <button onClick={cancelDelete}>Cancel</button>
            </div>
          </div>
        </div>
      </div>)  : 'Loading...'}
    </>
  )
}
export default GeneralCard

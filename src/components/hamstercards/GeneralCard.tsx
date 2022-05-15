import './GeneralCard.css'

import { fixUrl } from "../../utils"
import { Hamster } from '../../models/Hamsters'

interface Props {
  hamsterData: Hamster
}

const GeneralCard = ({ hamsterData }: Props) => {

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
            <div className='general-card-p'>
              <p>Age: {hamsterData.age} years old</p>
              <p>Favorite food: {hamsterData.favFood}</p>
              <p>Loves: {hamsterData.loves}</p>
              <p>Wins: {hamsterData.wins}</p>
              <p>Defeats: {hamsterData.defeats}</p>
              <p>Games: {hamsterData.games}</p>
            </div>
          </div>
        </div>
      </div>)  : 'Loading...'}
    </>
  )
}
export default GeneralCard


/*
Jobba vidare med hover card och hur datan visas
*/

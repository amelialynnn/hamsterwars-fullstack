import './BattleCard.css'

import { fixImageUrl } from '../../utils'
import { Hamster } from '../../models/Hamsters'

interface Props {
  randomHamster: Hamster
}

const BattleCard = ({ randomHamster }: Props) => {
 return (
   <>
   {randomHamster ?
   (<div key={randomHamster.id} className='battle-card-container'>
      <img className='battle-card-img' src={fixImageUrl((randomHamster.imgName))} alt="Cute hamster" />
      <p className='battle-card-p'>{randomHamster.name}</p>
    </div>) : 'Loading...'}
   </>
 )
}

export default BattleCard

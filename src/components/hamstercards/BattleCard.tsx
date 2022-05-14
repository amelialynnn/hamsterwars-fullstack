import './BattleCard.css'

import { fixUrl } from '../../utils'
import { Hamster } from '../../models/Hamsters'

interface Props {
  randomHamster: Hamster
}

const BattleCard = ({ randomHamster }: Props) => {
 return (
   <>
   {randomHamster ?
   (<div key={randomHamster.id} className='battle-card-container'>
      <img className='battle-card-img' src={fixUrl(`/img/${randomHamster.imgName}`)} alt="Cute hamster" />
      <p className='battle-card-p'>{randomHamster.name}</p>
    </div>) : 'Loading...'}
   </>
 )
}

export default BattleCard

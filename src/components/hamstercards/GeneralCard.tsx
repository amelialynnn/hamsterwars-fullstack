import './GeneralCard.css'

import { fixUrl } from "../../utils"
import { Hamster } from '../../models/Hamsters'

interface Props {
  hamsterData: Hamster
}

const GeneralCard = ({ hamsterData }: Props) => {
  console.log(hamsterData)

  return (
    <>
    {hamsterData ?
    (<div key={hamsterData.id} className='general-card-container'>
      <img className='general-card-img' src={fixUrl(`/img/${hamsterData.imgName}`)} alt="Cute hamster" />
      <p className='general-card-p'>{hamsterData.name}</p>
    </div>) : 'Loading...'}
    </>
  )
}
export default GeneralCard

/* TODO:
- visa felmeddelande om /hamster/cutest inte finns */

/*
<p>Bild på hamster + massa info se skiss</p>
lägg ev in hamstercards/HamsterOne eller ta bort denna och lägg in direkt i HamsterGrid
<button>Remove hamster</button>
*/

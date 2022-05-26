import { fixUrl, fixImageUrl } from '../../utils'
import { useState } from 'react'
import Modal from 'react-modal';
import { Hamster } from '../../models/Hamsters'

import './HamsterPopup.css'

interface Props {
  hamsterData: Hamster
}
interface matchWinners {
  id: string,
  loserId: string,
  winnerId: string
}

const HamsterPopup = ({hamsterData}: Props) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)

  const [selectedHamster, setSelectedHamster] = useState<null | Hamster>(null)
  const [losers, setLosers] = useState<null | Hamster[]>(null)

  async function openModal() {
    setSelectedHamster(hamsterData)
    setIsOpen(true)

    //Get selected hamster - games won
    const response: Response = await fetch(fixUrl(`/matchWinners/${hamsterData.id}`))
    const matchData: matchWinners[] = await response.json()

    getLosers(matchData)
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function getLosers(matchData: matchWinners[]) {
    let loserIdArr = matchData.map((hamster) => (hamster.loserId))

    let losersList:Hamster[] = []

    for (let i = 0; i < loserIdArr.length; i++) {
      const response: Response = await fetch(fixUrl(`/hamsters/${loserIdArr[i]}`))
      const data: Hamster = await response.json()
      losersList.push(data)
    }
    setLosers(losersList)
  }

 return (
  <>
  <div className="tooltip">
    <button className='tooltip-btn' onClick={openModal}>
      <i className="bi bi-info-circle"></i>
      <span className="tooltiptext">View victories</span>
    </button>
  </div>

  <section className='hamster-modal'>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      >
    <button onClick={closeModal}>close</button>
    {losers ? (<div className='match-losers-container'>
        <h2>{selectedHamster?.name} has defeated</h2>
        {losers.map((loser, index) => (
          <div key={index} className='match-loser' >
            <img className='match-loser-img' src={fixImageUrl(loser.imgName)} alt="Defeated hamster" />
            <p>{loser.name}</p>
          </div>
        ))}
      </div>) : (
      <div className='no-victories'>
        <p>Poor {selectedHamster?.name} has never won but is pretty darn cute anyway!</p>
      </div>)}
    </Modal>
  </section>
</>)}

export default HamsterPopup

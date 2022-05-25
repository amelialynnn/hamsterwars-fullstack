import { useState } from 'react'

import Modal from 'react-modal';

import './GeneralCard.css'
import './HamsterPopup.css'

const HamsterPopup = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

 return (
  <>
  <div className="tooltip">
    <button className='tooltip-btn' onClick={openModal}>
      <i className="bi bi-info-circle"></i>
      <span className="tooltiptext">Browse game results</span>
    </button>
  </div>

<section className='hamster-modal'>
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel="Example Modal">
   <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
  </Modal>
</section>
</>
 )
}

export default HamsterPopup

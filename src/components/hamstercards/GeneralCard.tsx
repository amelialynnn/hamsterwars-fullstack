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
interface MatchesObj {
  loserId: string,
  winnerId: string,
  id: string
}

const GeneralCard = ({ hamsterData }: Props) => {
  const [hamsters, setHamsters] = useRecoilState(HamstersAtom)

  const [allMatches, setAllMatches] = useState<null | MatchesObj[]>(null)

  const [hamsterInfo, setHamsterInfo] = useState('general-card-p')
  const [removeWarning, setRemoveWarning] = useState('hide-waring')

  const deleteHamster = () => {
    setRemoveWarning('show-waring')
    setHamsterInfo('hide-general-p')

    fetch(fixUrl(`/matches`))
      .then(respons => respons.json())
      .then(data => {
        setAllMatches(data)
      })
  }
  const cancelDelete = () => {
    setRemoveWarning('hide-waring')
    setHamsterInfo('general-card-p')
  }

  //TODO
  // - id på hamster som ska tas bort:
  // - ta bort match
  // - och uppdatera i hamsterobjekt så vinst eller förlust korrigeras

  const approvedDelete = (id: String) => {
    console.log('Alla matcher', allMatches)

    // selectedFiltered - hitta matcher med vald hamster id
    const selectedHamsterMatches = allMatches?.filter(x => x.loserId === id || x.winnerId === id)

    console.log('Selected hamster matcher', selectedHamsterMatches)

    // vilka hamster id som ska uppdateras
    // om loserID: hamstern ska få -1 på förluster
    const updateMatchLosers = selectedHamsterMatches?.filter(function(item) {
      return item.loserId !== id
    }).map(function(item){
      return item.loserId
    })

    // om winnerID: hamstern ska få -1 på vinster
    const updateMatchWinners = selectedHamsterMatches?.filter(function(item) {
      return item.winnerId !== id
    }).map(function(item){
      return item.winnerId
    })

    console.log('updateMatchLosers', updateMatchLosers)
    console.log('updateMatchWinners', updateMatchWinners)

    if (updateMatchLosers) {
      if (updateMatchLosers.length > 0) {
        console.log('update loser: hamstern ska få -1 på förluster & -1 på matcher')

        for (let i = 0; i < updateMatchLosers.length; i++) {
        fetch(fixUrl(`/hamsters/${updateMatchLosers[i]}`))
          .then(respons => respons.json())
          .then(hamster => {
            fetch(fixUrl(`/hamsters/${updateMatchLosers[i]}`), {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                defeats: hamster.defeats - 1,
                games: hamster.games - 1
                })
            })
          })
        }
      }
    }

    if (updateMatchWinners) {
      if (updateMatchWinners.length > 0) {
        console.log('update winner: hamstern ska få -1 på vinster & -1 på matcher')

        for (let i = 0; i < updateMatchWinners.length; i++) {
          fetch(fixUrl(`/hamsters/${updateMatchWinners[i]}`))
          .then(respons => respons.json())
          .then(hamster => {
            fetch(fixUrl(`/hamsters/${updateMatchWinners[i]}`), {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                wins: hamster.wins - 1,
                games: hamster.games - 1
                })
            })
          })
        }
      }
    }

    // Ta bort hamstern
    fetch(fixUrl(`/hamsters/${id}`), {
      method: 'DELETE',
    })

     // Ta bort matchobject
    if (selectedHamsterMatches) {
      if (selectedHamsterMatches.length > 0) {
        console.log(selectedHamsterMatches)
        for (let i = 0; i < selectedHamsterMatches.length; i++) {
          fetch(fixUrl(`/matches/${selectedHamsterMatches[i].id}`), {
            method: 'DELETE',
          })
        }
      }
    }

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
              <HamsterPopup hamsterData={hamsterData}/>
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

import { fixUrl } from '../../utils'

import { Hamster } from '../../models/Hamsters'

import '../buttons/Buttons.css'
import '../error/Error.css'

interface Props {
  setCutest: (hamster: Hamster[]) => void
}

const ErrorMessage = (props: Props) => {

  const tryFetch = () => {

    async function getData() {
			const response: Response = await fetch(fixUrl('/hamsters/cutest'))
			const apiData: Hamster[] = await response.json()

      if (apiData.length > 1) {
        const randomCutest = []
        randomCutest.push(apiData[Math.floor(Math.random() * apiData.length)])
        props.setCutest(randomCutest)
        return
      } else {
        props.setCutest(apiData)
      }

		}
    getData()
  }

  return (
    <div className='error-container'>
      <p><span>Ooops!</span> Something went wrong.. Couldn't find the cutest hamster right now.</p>
      <div  className='b-primary-container'>
        <button className='btn-error' onClick={tryFetch}>Try again</button>
      </div>
    </div>
  )
}

export default ErrorMessage

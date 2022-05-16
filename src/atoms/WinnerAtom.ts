import { atom } from 'recoil'

import { Hamster } from '../models/Hamsters'

const WinnerAtom = atom<Hamster | null>({
  key: 'WinnerAtom',
  default: null
})

export { WinnerAtom }

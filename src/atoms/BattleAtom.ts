import { atom } from 'recoil'

import { Hamster } from '../models/Hamsters'

const WinnerAtom = atom<Hamster | null>({
  key: 'WinnerAtom',
  default: null
})

const LoserAtom = atom<Hamster | null>({
  key: 'LoserAtom',
  default: null
})

export { WinnerAtom, LoserAtom }

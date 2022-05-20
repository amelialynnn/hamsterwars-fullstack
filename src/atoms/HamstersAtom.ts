import { atom } from 'recoil'

import { Hamster } from '../models/Hamsters'

const HamstersAtom = atom<Hamster[] | null>({
  key: 'HamstersAtom',
  default: null
})


export { HamstersAtom }

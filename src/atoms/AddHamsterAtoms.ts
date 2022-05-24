import { atom } from "recoil";

const NameAtom = atom<string>( {
  key: 'NameAtom',
  default: ''
})

const AgeAtom = atom<string>( {
  key: 'AgeAtom',
  default: ''
})

const FavFoodAtom = atom<string>( {
  key: 'FavFoodAtom',
  default: ''
})

const LovesAtom = atom<string>( {
  key: 'LovesAtom',
  default: ''
})

const ImgNameAtom = atom<string>( {
  key: 'ImgNameAtom',
  default: ''
})

export { NameAtom, AgeAtom, FavFoodAtom, LovesAtom, ImgNameAtom }

const NameStatusAtom = atom<string>( {
  key: 'NameStatus',
  default: ''
})

const AgeStatusAtom = atom<string>( {
  key: 'AgeStatus',
  default: ''
})

const FavFoodStatusAtom = atom<string>( {
  key: 'FavFoodStatus',
  default: ''
})

const LovesStatusAtom = atom<string>( {
  key: 'LovesStatus',
  default: ''
})

const ImgNameStatusAtom = atom<string>( {
  key: 'ImgNameStatus',
  default: ''
})

export { NameStatusAtom, AgeStatusAtom, FavFoodStatusAtom, LovesStatusAtom, ImgNameStatusAtom }


const SuccessAtom = atom<boolean>( {
  key: 'SuccessAtom',
  default: false
})

const FailAtom = atom<boolean>( {
  key: 'FailAtom',
  default: false
})

export { SuccessAtom, FailAtom }

import { atom } from "recoil";

const NameAtom = atom<string>( {
  key: 'NameAtom',
  default: ''
})

const AgeAtom = atom<string | number>( {
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
  key: 'nameStatus',
  default: ''
})

const AgeStatusAtom = atom<string>( {
  key: 'ageStatus',
  default: ''
})

const FavFoodStatusAtom = atom<string>( {
  key: 'favFoodStatus',
  default: ''
})

const LovesStatusAtom = atom<string>( {
  key: 'lovesStatus',
  default: ''
})

const ImgNameStatusAtom = atom<string>( {
  key: 'imgNameStatus',
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

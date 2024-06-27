import { atom } from "recoil";

export const storeState = atom({
  key: 'storeState',
  default: '주문할 매장을 선택해 주세요'
})

export const storeIdState = atom({
  key: 'storeId',
  default: '0'
})
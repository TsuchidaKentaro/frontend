import { atom } from 'recoil';

export const textState = atom({
  key: 'textState', // ユニークなキー
  default: '', // 初期値
});

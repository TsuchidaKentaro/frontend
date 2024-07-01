import { atom } from 'recoil';

export const textState = atom({
  key: 'textState', // ユニークなキー
  default: '', // 初期値
});

export const todoListState = atom({
    key: 'todoListState', // ユニークなキー
    default: [], // 初期値として空の配列
  });
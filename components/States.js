import { atom } from 'recoil';
import { useRecoilState } from 'recoil';

export const showModalActiveState = atom({
  key: 'modalActive',
  default: false,
});

export const showModalContentState = atom({
  key: 'modalContent',
  default: '',
});

export const listAllWidgetsState = atom({
  key: 'listAllWidgets',
  default: [],
});

export const totalJustSayState = atom({
  key: 'totalJustSay',
  default: 0,
});

export const totalCounterState = atom({
  key: 'totalCounter',
  default: 0,
});
export const totalTimerState = atom({
  key: 'totalTimer',
  default: '',
});
export const totalWidgetState = atom({
  key: 'totalWidget',
  default: 0,
});
export const zeroState = atom({
  key: 'zero',
  default: '',
});
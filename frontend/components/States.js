import { atom, selector } from 'recoil';
import getMinSecond from '../helpers/calculateTime';
import {
  getFinalToTalTimerOrCounter,
  getFinalTotalJustSayLength,
  getDataColdestCity,
} from '../helpers/calculateTotalWidgets';

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

export const totalJustSayState = selector({
  key: 'totalJustSay',
  get: ({ get }) => {
    const listAllWidgets = get(listAllWidgetsState);
    const total = getFinalTotalJustSayLength(listAllWidgets);
    return total;
  },
});

export const totalCounterState = selector({
  key: 'totalCounter',
  get: ({ get }) => {
    const listAllWidgets = get(listAllWidgetsState);
    const total = getFinalToTalTimerOrCounter(listAllWidgets, 'counter');
    return total;
  },
});

export const totalTimerState = selector({
  key: 'totalTimer',
  get: ({ get }) => {
    const listAllWidgets = get(listAllWidgetsState);
    const time = getFinalToTalTimerOrCounter(listAllWidgets, 'timer');
    return getMinSecond(time);
  },
});

export const coldestCityState = selector({
  key: 'coldestCity',
  get: ({ get }) => {
    const listAllWidgets = get(listAllWidgetsState);
    return getDataColdestCity(listAllWidgets);
  },
});

export const totalWidgetState = selector({
  key: 'totalWidget',
  get: ({ get }) => {
    const listAllWidgets = get(listAllWidgetsState);
    return listAllWidgets.length;
  },
});
export const zeroState = atom({
  key: 'zero',
  default: '',
});

export const onRefreshState = atom({
  key: 'onRefresh',
  default: false,
});

export const isCustomEditState = atom({
  key: 'isCustom',
  default: true,
});

export const defaultShoutState = atom({
  key: 'defaultShout',
  default: '',
});

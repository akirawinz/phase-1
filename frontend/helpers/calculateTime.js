const getMinSecond = (getTime) => {
  const miSec = calculateTime(10, 100, getTime);
  const second = calculateTime(1000, 60, getTime);
  const minute = calculateTime(60000, 60, getTime);
  const computedSecond = computedTime(second, getTime);
  const computedMinute = computedTime(minute, getTime);
  const computedMiliSec = computedTime(miSec, getTime);
  return computedMinute + ':' + computedSecond + ':' + computedMiliSec;
};

const calculateTime = (ts, mod, getTime) => {
  return Math.floor(getTime / ts) % mod;
};

const computedTime = (getTime) => {
  return String(getTime).length === 1 ? `0${getTime}` : getTime;
};
export default getMinSecond;

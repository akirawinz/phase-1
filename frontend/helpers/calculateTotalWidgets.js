export const getFinalToTalTimerOrCounter = (temp, type) => {
  let getTimer = temp
    .filter((data) => data.type === type)
    .map((data) => data.value);
  if (getTimer.length != 0) {
    getTimer = getTimer.reduce((prev, next) => prev + next);
  } else {
    getTimer = 0;
  }
  return getTimer;
};
export const getFinalTotalJustSayLength = (temp) => {
  let getString = '';
  temp
    .filter((data) => data.type === 'JustSay' || data.type === 'JustShout')
    .map((data) => {
      getString = getString + data.value;
    });
  return getString.length;
};

export const getDataColdestCity = (temp) => {
  let coldest = temp
    .filter((data) => data.type === 'Weather')
    .map((data) => {
      if (data.weather) {
        return { name: data.weather.value, temp: data.weather.temp };
      }
    })
    .sort((a, b) => a.temp - b.temp);
  if (coldest[0]) {
    coldest = coldest[0].name;
  } else {
    coldest = '';
  }
  return coldest;
};

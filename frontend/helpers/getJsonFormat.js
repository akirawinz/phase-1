import CurrentDate from './currentDate';
const GetJson = (value = '', type, weather) => {
  return {
    id: new Date().valueOf(),
    value,
    currentTime: CurrentDate(),
    type,
  };
};

export default GetJson;

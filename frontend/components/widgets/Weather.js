import { useEffect, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { onRefreshState } from '../States';
import { useRecoilState } from 'recoil';

const Weather = ({ list, mapNewData }) => {
  const [onRefresh, setOnRefresh] = useRecoilState(onRefreshState);
  const value = list.value;
  const weather = list.weather;
  const icon = weather ? weather.icon : '';
  console.log(process.env.NEXT_PUBLIC_SECRET_KEY);

  const searchWeather = async (value) => {
    const url =
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      value +
      '&appid=' +
      process.env.NEXT_PUBLIC_SECRET_KEY;
    try {
      const { data } = await axios.get(url);
      const temp = parseInt(data.main.temp - 273);
      return getJsonData(data, temp);
    } catch (error) {
      // setError(true);
    }
  };
  const getJsonData = (data, temp) => {
    return {
      value: data.name,
      weather: data.weather[0].main,
      description: data.weather[0].description,
      icon:
        'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png',
      temp: temp,
    };
  };

  useEffect(async () => {
    const getJson = await searchWeather(value);
    await mapNewData(list, getJson);
    setOnRefresh(false);
  }, [list.value, onRefresh]);

  let styledValue = classNames('text-2xl font-bold capitalize ', {
    'text-red-500 ': !weather,
  });
  let styledDescription = classNames(' -mt-1 relative ', {
    'text-red-500 ': !weather,
    'text-gray-400': weather,
  });
  let styledTemp = classNames('text-gray-500 mt-1 text-5xl font-extralight ', {
    'text-red-500 ': !weather,
  });

  return (
    <div className="text-center my-8 ">
      <span className={styledValue}>{weather ? weather.value : value}</span>

      <h4 className={styledDescription}>
        <img
          src={icon}
          className="align-right mr-1.5 absolute -top-5 left-20 w-2/12 "
        />
        {weather ? weather.description : 'City not found !!'}
      </h4>

      <h2 className={styledTemp}>{weather ? weather.temp + '°' : '_ _'}</h2>
    </div>
  );
};

export default Weather;

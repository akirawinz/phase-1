import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import { isCustomEditState } from '../States';
import axios from 'axios';
const Custom = ({ list, mapNewData }) => {
  const [isCustom, setIsCustom] = useRecoilState(isCustomEditState);
  const [allData, setAllData] = useState([]);

  const searchAns = async list => {
    const url = 'http://localhost:3333/api/test';
    let payload = {
      data: list.value,
    };
    try {
      const { data } = await axios.post(url, payload);
      return data.data;
    } catch (error) {
      if (!error.response) {
        alert('please connect database');
      }
    }
  };

  useEffect(async () => {
    if (isCustom) {
      const method = await searchAns(list);
      await mapNewData(list);
      setAllData(method);
      setIsCustom(false);
    }
  }, [list.value]);

  const displayInput = () => {
    if (list) {
      return list.value.map((data, index) => {
        return (
          <span className="class" key={index}>
            {data + ' '}
          </span>
        );
      });
    }
  };

  const answer = () => {
    if (allData && allData.length > 0) {
      return allData.map((data, index) => {
        return (
          <div key={index}>
            <span className="text-left">method : </span>
            {index + 1} {data} = 24
          </div>
        );
      });
    } else {
      return <p> Can't make 24 !</p>;
    }
  };
  return (
    <div className="text-center my-8">
      <span className="text-xl">Input: {displayInput()}</span>
      <h3 className="text-red-500 my-2">OutPut:</h3>
      <ul> {answer()}</ul>
    </div>
  );
};

export default Custom;

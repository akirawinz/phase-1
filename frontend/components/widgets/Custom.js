import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import { isCustomEditState } from '../States';
import axios from 'axios';
const Custom = ({ list, mapNewData }) => {
  const [isCustom, setIsCustom] = useRecoilState(isCustomEditState);

  const searchAns = async (list) => {
    const url = 'http://localhost:3333/api/test';
    let payload = {
      data: list.value,
    };
    const data = await axios
      .post(url, payload)
      .then((res) => {
        return res.data.data;
      })
      .catch((error) => {
        if (!error.response) {
          alert('please connect database');
        }
      });
    return data;
  };

  useEffect(async () => {
    const method = await searchAns(list);
    console.log(method);
    // await mapNewData(list, getJson);
    // await mapNewData(list, method);
    // setIsCustom(false);
  }, [list]);

  const displayInput = () => {
    return list.value.map((data, index) => {
      return (
        <span className="class" key={index}>
          {data + ' '}
        </span>
      );
    });
  };

  const answer = () => {
    if (list.method) {
      return list.method.map((data, index) => {
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
    <>
      <div className="text-center my-8">
        <span className="text-xl">Input: {displayInput()}</span>
        <h3 className="text-red-500 my-2">OutPut:</h3>
        <ul> {answer()}</ul>
      </div>
    </>
  );
};

export default Custom;

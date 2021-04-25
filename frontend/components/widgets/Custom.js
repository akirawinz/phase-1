import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import { isCustomEditState } from '../States';

const Custom = ({ list, mapNewCustom, searchAns }) => {
  let method;
  const [isCustom, setIsCustom] = useRecoilState(isCustomEditState);

  useEffect(async () => {
    if (isCustom) {
      const method = await searchAns(list);
      mapNewCustom(list, method);
    }
    setIsCustom(false);
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

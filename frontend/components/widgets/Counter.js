import Button from '../Button';
import { useEffect, useState } from 'react';
import PolarButton from '../PolarButton';
import { useRecoilState } from 'recoil';
import { zeroState } from '../States';

const Counter = ({ list, getNum, mapNewData }) => {
  const [zero, setZero] = useRecoilState(zeroState);
  const [num, setNum] = useState(getNum);
  let disabled = false;
  if (num === 0 || getNum === 0) disabled = true;
  useEffect(() => {
    setNum(Number(getNum));
  }, [getNum]);
  useEffect(() => {
    mapNewData(list, num);
  }, [num]);
  useEffect(() => {
    if (zero === 'counter') {
      setNum(0);
      setZero('');
    }
  }, [zero]);
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mt-4 mb-6">
        <PolarButton
          disabled={disabled}
          onClick={() => setNum(num - 1)}
          color="gray"
        >
          -
        </PolarButton>
        <div className="text-6xl mx-7">{num}</div>
        <PolarButton color="blue" onClick={() => setNum(num + 1)}>
          +
        </PolarButton>
      </div>
      <Button disabled={disabled} onClick={() => setNum(0)}>
        Set Zero
      </Button>
    </div>
  );
};

export default Counter;

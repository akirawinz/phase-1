import Button from '../Button';
import { useEffect, useState } from 'react';
import PolarButton from '../PolarButton';
const Counter = ({ getNum }) => {
  const [num, setNum] = useState(getNum);
  let disabled = false;
  if (num === 0 || getNum === 0) disabled = true;
  useEffect(() => {}, [num]);
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
        <div className="text-6xl mx-7">
          {num} : {getNum}
        </div>
        <PolarButton color="blue" onClick={() => setNum(num + 1)}>
          +
        </PolarButton>
      </div>
      <Button disabled={disabled} onClick={() => setNum(0)}>
        Reset
      </Button>
    </div>
  );
};

export default Counter;

import Button from '../Button';
import { useState } from 'react';
import PolarButton from '../PolarButton';
const Counter = () => {
  const [num, setNum] = useState(0);
  let disabled = false;
  if (num === 0) disabled = true;
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
        Reset
      </Button>
    </div>
  );
};

export default Counter;

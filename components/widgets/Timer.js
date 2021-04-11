import Button from '../Button';
import { useEffect, useState } from 'react';

const Timer = () => {
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);
        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);
        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  const stopTimer = () => {
    setIsActive(false);
    setDisabled(true);
    setCounter(0);
    setSecond('00');
    setMinute('00');
  };

  const handleStart = () => {
    setIsActive(!isActive);
    setDisabled(false);
  };
  return (
    <>
      <div className="text-center">
        <div className="flex items-center justify-center mt-4 mb-6">
          <div className="text-5xl mx-7">
            {minute}:{second}
          </div>
        </div>
        <Button onClick={handleStart}>{!isActive ? 'Start' : 'Pause'}</Button>
        &nbsp;
        <Button onClick={stopTimer} disabled={disabled}>
          Reset
        </Button>
      </div>
    </>
  );
};

export default Timer;

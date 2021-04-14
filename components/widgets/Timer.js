import Button from '../Button';
import { useEffect, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const getMinSecond = () => {
    const miSec = calculateTime(10, 100);
    const second = calculateTime(1000, 60);
    const minute = calculateTime(60000, 60);
    const computedSecond = computedTime(second);
    const computedMinute = computedTime(minute);
    const computedMiliSec = computedTime(miSec);
    return computedMinute + ':' + computedSecond + ':' + computedMiliSec;
  };

  const calculateTime = (ts, mod) => {
    return Math.floor(time / ts) % mod;
  };

  const computedTime = (getTime) => {
    return String(getTime).length === 1 ? `0${getTime}` : getTime;
  };

  const stopTimer = () => {
    setIsActive(false);
    setDisabled(true);
    setTime(0);
  };

  const handleStart = () => {
    setIsActive(!isActive);
    setDisabled(false);
  };

  return (
    <>
      <div className="text-center">
        <div className="flex items-center justify-center mt-4 mb-6">
          <div className="text-5xl mx-7">{getMinSecond()}</div>
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

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
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const getMinSecond = () => {
    const second = time % 60;
    const minute = Math.floor(second / 60);
    let computedSecond = computedTime(second);
    let computedMinute = computedTime(minute);
    return computedMinute + ':' + computedSecond;
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

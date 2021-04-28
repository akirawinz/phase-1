import Button from '../Button';
import { useEffect, useState } from 'react';
import getMinSecond from '../../helpers/calculateTime';
import _ from 'lodash';
import { useRecoilState } from 'recoil';
import { zeroState } from '../States';
const Timer = ({ mapNewData, list }) => {
  const [zero, setZero] = useRecoilState(zeroState);
  const [time, setTime] = useState(list.value || 0);
  const [isActive, setIsActive] = useState(false);
  const disabled = time === 0;

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  useEffect(() => {
    if (time % 1000 === 0) mapNewData(list, time);
  }, [time]);

  useEffect(() => {
    if (zero === 'timer') {
      setTime(0);
      setZero('');
      setIsActive(false);
    }
  }, [zero]);

  const stopTimer = () => {
    setIsActive(false);
    setTime(0);
  };

  const handleStart = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center mt-4 mb-6">
        <div className="text-5xl mx-7">{getMinSecond(time)}</div>
      </div>
      <Button onClick={handleStart}>{!isActive ? 'Start' : 'Pause'}</Button>
      &nbsp;
      <Button onClick={stopTimer} disabled={disabled} color={'red'}>
        Reset
      </Button>
    </div>
  );
};

export default Timer;

import Button from '../Button';
import { useEffect, useState } from 'react';
import getMinSecond from '../../helpers/calculateTime';

const Timer = ({ listAllWidgets, list, setListAllWidgets, zero }) => {
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
    const mapData = listAllWidgets.map((data) => {
      if (data.id === list.id) {
        return { ...data, value: time };
      } else {
        return data;
      }
    });
    setListAllWidgets(mapData);
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  useEffect(() => {
    if (zero === 'timer') setTime(0);
  }, [zero]);

  useEffect(() => {}, [listAllWidgets]);

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
          <div className="text-5xl mx-7">{getMinSecond(time)}</div>
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

import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import Card from '../template/Card';
import Form from '../Form';
import Button from '../Button';
import getMinSecond from '../../helpers/calculateTime';
import {
  showModalActiveState,
  totalCounterState,
  totalTimerState,
  totalWidgetState,
  totalJustSayState,
  zeroState,
  listAllWidgetsState,
} from '../States';
const ModalSetting = ({ clearAll }) => {
  const [showModalActive, setShowModalActive] = useRecoilState(
    showModalActiveState
  );
  const [totalJustSay, setTotalJustSay] = useRecoilState(totalJustSayState);
  const [totalCounter, setTotalCounter] = useRecoilState(totalCounterState);
  const [totalTimer, setTotalTimer] = useRecoilState(totalTimerState);
  const [totalWidget, setTotalWidget] = useRecoilState(totalWidgetState);
  const [listAllWidgets, setListAllWidgets] = useRecoilState(
    listAllWidgetsState
  );
  const [zero, setZero] = useRecoilState(zeroState);

  useEffect(() => {
    if (listAllWidgets.length > 0) {
      const temp = _.cloneDeep(listAllWidgets);
      const getTotalTimer = getFinalToTalTimerOrCounter(temp, 'timer');
      const getTotalCounter = getFinalToTalTimerOrCounter(temp, 'counter');
      const getTotalJustSayLength = getFinalTotalJustSayLength(temp);
      setTotalJustSay(getTotalJustSayLength);
      setTotalCounter(getTotalCounter);
      setTotalWidget(listAllWidgets.length);
      setTotalTimer(getMinSecond(getTotalTimer));
    }
  }, [listAllWidgets]);

  const getFinalTotalJustSayLength = (temp) => {
    let getString = '';
    temp
      .filter((data) => data.type === 'justSay')
      .map((data) => {
        getString = getString + data.value;
      });
    return getString.length;
  };

  const getFinalToTalTimerOrCounter = (temp, type) => {
    let getTimer = temp
      .filter((data) => data.type === type)
      .map((data) => data.value);
    if (getTimer.length > 0) {
      getTimer = getTimer.reduce((prev, next) => prev + next);
    }
    return getTimer;
  };

  const handleTypeSetZero = (e) => {
    e.preventDefault();
    const inputType = e.target.inputType.value;
    if (inputType === 'counter') {
      setZero('counter');
    }
    if (inputType === 'timer') {
      setZero('timer');
    }
    setShowModalActive(false);
  };

  return (
    <>
      <Card title={'Statistics'} fullCard={true}>
        <div className="table">
          <div className="table-row">
            <div className="table-cell pr-4 font-semibold">Total widgets:</div>
            <div className="table-cell">{totalWidget}</div>
          </div>
          <div className="table-row">
            <div className="table-cell pr-4 font-semibold">
              Total JustSay length
            </div>
            <div className="table-cell">{totalJustSay}</div>
          </div>
          <div className="table-row">
            <div className="table-cell pr-4 font-semibold">Total Count :</div>
            <div className="table-cell">{totalCounter}</div>
          </div>
          <div className="table-row">
            <div className="table-cell pr-4 font-semibold">Total Time :</div>
            <div className="table-cell">
              {totalTimer ? totalTimer : '00:00:00'}
            </div>
          </div>
        </div>
      </Card>
      <Card title={'Reset Zone'} fullCard={true}>
        <Form
          inputType={'selector'}
          color={'red'}
          title={'Set Zero'}
          onSubmit={handleTypeSetZero}
        />
      </Card>
      <Card title={'Delete Zone'} fullCard={true}>
        <Button color={'red'} wFull={true} onClick={clearAll}>
          Delete all widgets
        </Button>
      </Card>
    </>
  );
};

export default ModalSetting;

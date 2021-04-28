import { useRecoilState, useRecoilValue } from 'recoil';
import Card from '../template/Card';
import Form from '../Form';
import Button from '../Button';
import FormInputText from '../form/FormInputText';
import {
  showModalActiveState,
  totalCounterState,
  totalTimerState,
  totalWidgetState,
  totalJustSayState,
  zeroState,
  listAllWidgetsState,
  coldestCityState,
  defaultShoutState,
} from '../States';
const ModalSetting = ({ onEdit }) => {
  const [showModalActive, setShowModalActive] = useRecoilState(
    showModalActiveState
  );
  const totalCounter = useRecoilValue(totalCounterState);
  const totalTimer = useRecoilValue(totalTimerState);
  const totalJustSay = useRecoilValue(totalJustSayState);
  const totalWidget = useRecoilValue(totalWidgetState);
  const [listAllWidgets, setListAllWidgets] = useRecoilState(
    listAllWidgetsState
  );
  const coldestCity = useRecoilValue(coldestCityState);
  const [zero, setZero] = useRecoilState(zeroState);
  const [defaultShout, setDefaultShout] = useRecoilState(defaultShoutState);

  const clearAll = () => {
    setListAllWidgets([]);
    setShowModalActive(false);
    setDefaultShout('');
  };

  const handleTypeSetZero = (e) => {
    e.preventDefault();
    const inputType = e.target.inputType.value;
    if (inputType === 'counter' && totalCounter !== 0) {
      setZero('counter');
    }
    if (inputType === 'timer') {
      setZero('timer');
    }
    setShowModalActive(false);
  };
  const disabled =
    listAllWidgets.filter((data) => data.type === 'JustShout').length === 0;

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
              Total Just length
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
          <div className="table-row">
            <div className="table-cell pr-4 font-semibold">Coldest City :</div>
            <div className="table-cell">{coldestCity}</div>
          </div>
        </div>
      </Card>
      <Card title={'JustShout Text'} fullCard={true}>
        <FormInputText
          onEdit={onEdit}
          addType={false}
          title={'Edit'}
          type={'JustShout'}
          disabled={disabled}
          setting={'modalSetting'}
        />
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

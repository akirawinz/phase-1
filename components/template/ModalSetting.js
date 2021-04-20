import Modal from '../Modal';
import Card from '../template/Card';
import Form from '../Form';
import Button from '../Button';
const ModalSetting = ({
  showModalSetting,
  setShowModalSetting,
  totalJustSay,
  totalCounter,
  setZero,
  totalTimer,
  totalWidget,
  clearAll,
}) => {
  const handleTypeSetZero = (e) => {
    e.preventDefault();
    const inputType = e.target.inputType.value;
    if (inputType === 'counter') {
      setZero('counter');
    }
    if (inputType === 'timer') {
      setZero('timer');
    }
    setShowModalSetting(false);
  };

  return (
    <>
      <Modal
        show={showModalSetting}
        title={'Setting'}
        onCancel={() => setShowModalSetting(false)}
      >
        <Card title={'Statistics'} fullCard={true}>
          <div className="table">
            <div className="table-row">
              <div className="table-cell pr-4 font-semibold">
                Total widgets:
              </div>
              <div className="table-cell">{totalWidget}</div>
            </div>
            <div className="table-row">
              <div className="table-cell pr-4 font-semibold">
                total JustSay length
              </div>
              <div className="table-cell">{totalJustSay}</div>
            </div>
            <div className="table-row">
              <div className="table-cell pr-4 font-semibold">total Count :</div>
              <div className="table-cell">{totalCounter}</div>
            </div>
            <div className="table-row">
              <div className="table-cell pr-4 font-semibold">total Time :</div>
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
      </Modal>
    </>
  );
};

export default ModalSetting;

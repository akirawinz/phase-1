import Modal from '../Modal';
import Card from '../template/Card';
import Form from '../Form';
import Button from '../Button';
const ModalSetting = ({
  showModalSetting,
  setShowModalSetting,
  listAllWidgets,
  totalJustSay,
  totalCounter,
  setZero,
  zero,
}) => {
  const handleTypeSetZero = (e) => {
    e.preventDefault();
    const inputType = e.target.inputType.value;
    setZero('counter');
    console.log(zero);
    // if (inputType === 'counter') {
    //   return setZero('counter');
    // }
    // if (inputType === 'timer') {
    //   return setZero('timer');
    // }
    // return true;
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
              <div className="table-cell">0</div>
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
          <Button color={'red'} wFull={true}>
            Delete all widgets
          </Button>
        </Card>
      </Modal>
    </>
  );
};

export default ModalSetting;

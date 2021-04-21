import { useEffect, useState } from 'react';
import { RiAddCircleLine } from 'react-icons/ri';
import { BiBomb } from 'react-icons/bi';
import Button from '../Button';
import Modal from '../Modal';
import Form from '../Form';
import WidgetModalList from '../layouts/WidgetModalList';
import ModalSetting from '../template/ModalSetting';
import getMinSecond from '../../helpers/calculateTime';
import ModalContent from './ModalContent';
import FormJustSay from '../form/FormJustSay';
import FormCounter from '../form/FormCounter';
const ModalList = () => {
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState();
  const [showModalJustSay, setShowModalJustSay] = useState(false);
  const [showModalEditJustSay, setShowModalEditJustSay] = useState(false);
  const [showModalCounter, setShowModalCounter] = useState(false);
  const [showModalSetting, setShowModalSetting] = useState(false);
  const [listAllWidgets, setListAllWidgets] = useState([]);
  const [initialWidget, setInitialWidget] = useState(true);

  const [totalJustSay, setTotalJustSay] = useState(0);
  const [totalCounter, setTotalCounter] = useState(0);
  const [totalTimer, setTotalTimer] = useState('');
  const [totalWidget, setTotalWidget] = useState(0);
  const [zero, setZero] = useState('');

  const filterTotal = (type) => {
    return (
      listAllWidgets.filter((val) => {
        return val.type === type;
      }).length || 0
    );
  };

  useEffect(() => {
    if (listAllWidgets.length > 0) {
      setInitialWidget(false);
      setTotalJustSay(filterTotal('justSay'));
      setTotalCounter(filterTotal('counter'));
      setTotalWidget(listAllWidgets.length);
      let getTimer = listAllWidgets
        .filter((data) => data.type === 'timer')
        .map((data) => data.value);
      if (getTimer.length > 0) {
        getTimer = getTimer.reduce((prev, next) => prev + next);
      }
      setTotalTimer(getMinSecond(getTimer));
    }
  }, [listAllWidgets]);

  const openModal = (modalType) => () => {
    if (modalType === 'modal') {
      setShowModal(true);
      setShowModalJustSay(false);
      setShowModalCounter(false);
    } else if (modalType === 'formJustSay') {
      setShowModal(false);
      setShowModalJustSay(true);
      setShowModalCounter(false);
    } else if (modalType === 'formAddCounter') {
      setShowModal(false);
      setShowModalJustSay(false);
      setShowModalCounter(true);
    } else if (modalType === 'setting') {
      setShowModalSetting(true);
      setShowModal(false);
      setShowModalJustSay(false);
      setShowModalCounter(false);
    } else if (modalType === 'formEditJustSay') {
      setShowModalEditJustSay(true);
    }
  };

  const clearAll = () => {
    setError('');
    setShowModal(false);
    setShowModalJustSay(false);
    setShowModalCounter(false);
    setInitialWidget(true);
    setListAllWidgets([]);
    setShowModalSetting(false);
    setShowModalEditJustSay(false);
  };

  return (
    <div className="pt-3">
      <div className="mb-4">
        <Button onClick={openModal('modal')}>
          <RiAddCircleLine className="inline-block text-xl relative -top-0.5 mx-1" />
          Add Widgets
        </Button>
        <Button onClick={openModal('setting')} color={'gray'}>
          <BiBomb className="inline-block text-xl relative -top-0.5 mx-1" />
          Setting
        </Button>

        <Modal
          show={showModal}
          title={'Add widget'}
          onCancel={() => setShowModal(false)}
        >
          <WidgetModalList
            openModal={openModal}
            listAllWidgets={listAllWidgets}
            setListAllWidgets={setListAllWidgets}
            setShowModal={setShowModal}
          />
        </Modal>
        <Modal
          show={showModalJustSay}
          title={'Add JustSay'}
          onCancel={() => setShowModalJustSay(false)}
        >
          <FormJustSay
            setListAllWidgets={setListAllWidgets}
            setShowModalJustSay={setShowModalJustSay}
            listAllWidgets={listAllWidgets}
          />
        </Modal>

        <ModalSetting
          showModalSetting={showModalSetting}
          setShowModalSetting={setShowModalSetting}
          listAllWidgets={listAllWidgets}
          totalJustSay={totalJustSay}
          totalCounter={totalCounter}
          totalTimer={totalTimer}
          totalWidget={totalWidget}
          setZero={setZero}
          clearAll={clearAll}
        ></ModalSetting>
        <Modal
          show={showModalCounter}
          title={'Add counter'}
          onCancel={() => setShowModalCounter(false)}
        >
          <FormCounter
            setListAllWidgets={setListAllWidgets}
            setShowModalCounter={setShowModalCounter}
            listAllWidgets={listAllWidgets}
          />
        </Modal>
      </div>
      <div className="md:flex md:flex-wrap md:-mr-4">
        <ModalContent
          initialWidget={initialWidget}
          listAllWidgets={listAllWidgets}
          setListAllWidgets={setListAllWidgets}
          zero={zero}
          setZero={setZero}
          openModal={openModal}
          showModalEditJustSay={showModalEditJustSay}
          setShowModalEditJustSay={setShowModalEditJustSay}
          setShowModalJustSay={setShowModalJustSay}
          error={error}
          setError={setError}
          openModal={openModal}
        />
      </div>
    </div>
  );
};

export default ModalList;

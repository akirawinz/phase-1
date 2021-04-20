import { useEffect, useState } from 'react';
import { RiAddCircleLine } from 'react-icons/ri';
import { BiBomb } from 'react-icons/bi';
import Button from '../Button';
import Modal from '../Modal';
import Form from '../Form';
import ListAllWidget from '../widgets/ListAllWidget';
import WidgetModalList from '../layouts/WidgetModalList';
import CardNone from '../template/CardNone';
import ModalSetting from '../template/ModalSetting';
import getMinSecond from '../../helpers/calculateTime';

const ModalList = () => {
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showModalJustSay, setShowModalJustSay] = useState(false);
  const [showModalSetting, setShowModalSetting] = useState(false);
  const [listAllWidgets, setListAllWidgets] = useState([]);
  const [showModalCounter, setShowModalCounter] = useState(false);

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
    }
  };

  const getJson = (data, value = '', type) => {
    let id;
    if (data.length === 0) {
      id = 1;
    } else {
      const getLastArrId = data[0].id;
      id = getLastArrId + 1;
    }
    return {
      id,
      value,
      currentTime:
        'Added on ' +
        new Date()
          .toLocaleDateString('us-TH', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
          })
          .toString(),
      type,
    };
  };

  const handleFormJustSay = (e) => {
    e.preventDefault();
    const trim = e.target.title.value.trim().length;
    if (trim < 3) {
      setError('Please enter at least 3 characters.');
    } else {
      const getData = getJson(listAllWidgets, e.target.title.value, 'justSay');
      setListAllWidgets([...listAllWidgets, getData]);
      setShowModalJustSay(false);
      setError('');
    }
  };

  const handleFormCounter = (e) => {
    e.preventDefault();
    if (e.target.num.value < 0) {
      setError('Please enter at least 0.');
    } else if (e.target.num.value == '') {
      setError('Please provide some value.');
    } else {
      setError('');
      const getData = getJson(
        listAllWidgets,
        Number(e.target.num.value),
        'counter'
      );
      setListAllWidgets([...listAllWidgets, getData]);
      setShowModalCounter(false);
    }
  };
  // const handleClearButton = () => {
  //   if (!initialWidget) {
  //     return (
  //       <Button color={'red'} onClick={clearAll}>
  //         <BiBomb className="inline-block text-xl relative -top-0.5 mx-1" />
  //         Clear all
  //       </Button>
  //     );
  //   } else {
  //     return (
  //       <Button disabled={initialWidget}>
  //         <BiBomb className="inline-block text-xl relative -top-0.5 mx-1" />
  //         Clear all
  //       </Button>
  //     );
  //   }
  // };
  const clearAll = () => {
    setError('');
    setShowModal(false);
    setShowModalJustSay(false);
    setShowModalCounter(false);
    setInitialWidget(true);
    setListAllWidgets([]);
    setShowModalSetting(false);
  };

  const handleWidgets = () => {
    if (!initialWidget) {
      const sort = listAllWidgets.sort((a, b) => {
        return b.id - a.id;
      });
      return (
        <ListAllWidget
          getAllListWidgets={sort}
          listAllWidgets={listAllWidgets}
          setListAllWidgets={setListAllWidgets}
          zero={zero}
          setZero={setZero}
        />
      );
    } else {
      return <CardNone openModal={openModal} />;
    }
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
            getJson={getJson}
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
          <Form
            onSubmit={handleFormJustSay}
            error={error}
            type={'text'}
            name={'title'}
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
          <Form
            onSubmit={handleFormCounter}
            error={error}
            type={'number'}
            name={'num'}
            placeHolder={'initial number'}
          />
        </Modal>
      </div>
      <div className="md:flex md:flex-wrap md:-mr-4">{handleWidgets()}</div>
    </div>
  );
};

export default ModalList;

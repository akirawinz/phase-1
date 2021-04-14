import { useEffect, useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { RiIncreaseDecreaseLine } from 'react-icons/ri';
import { IoTimerOutline } from 'react-icons/io5';
import { RiAddCircleLine } from 'react-icons/ri';
import { BiBomb } from 'react-icons/bi';
import MainLayout from '../components/layouts/Main';
import Button from '../components/Button';
import WidgetModal from '../components/widgets/WidgetModal';
import Modal from '../components/Modal';
import JustSayList from '../components/widgets/JustSayList';
import CounterList from '../components/widgets/CounterList';
import TimerList from '../components/widgets/TimerList';
import Card from '../components/template/Card';
import Form from '../components/Form';

const Home = () => {
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showModalJustSay, setShowModalJustSay] = useState(false);
  const [showModalCounter, setShowModalCounter] = useState(false);
  const [justSayWidgets, setJustSayWidgets] = useState([]);
  const [counterWidgets, setCounterWidgets] = useState([]);
  const [timerWidgets, setTimerWidgets] = useState([]);
  const [initialWidget, setInitialWidget] = useState(true);
  const iconClass = 'text-4xl mx-auto';

  useEffect(() => {
    if (justSayWidgets.length > 0) setInitialWidget(false);
  }, [justSayWidgets]);

  useEffect(() => {
    if (counterWidgets.length > 0) setInitialWidget(false);
  }, [counterWidgets]);

  useEffect(() => {
    if (timerWidgets.length > 0) setInitialWidget(false);
  }, [timerWidgets]);
  useEffect(() => {}, [initialWidget]);

  // const { justSayValidate, handleSubmit, errors } = useForm();

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
    }
  };

  const getTimer = () => {
    const getData = getJson(timerWidgets);
    setTimerWidgets([...timerWidgets, getData]);
    setShowModal(false);
  };

  const getJson = (data, value = '') => {
    let id;
    if (data.length === 0) {
      id = 1;
    } else {
      const getLastArrId = [...data].pop().id;
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
    };
  };

  const handleFormJustSay = (e) => {
    e.preventDefault();
    const trim = e.target.title.value.trim().length;
    if (trim < 3) {
      setError('Please enter at least 3 characters.');
    } else {
      const getData = getJson(justSayWidgets, e.target.title.value);
      setJustSayWidgets([...justSayWidgets, getData]);
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
      const getData = getJson(counterWidgets, e.target.num.value);
      setCounterWidgets([...counterWidgets, getData]);
      setShowModalCounter(false);
    }
  };
  const handleClearButton = () => {
    if (!initialWidget) {
      return (
        <Button color={'red'} onClick={clearAll}>
          <BiBomb className="inline-block text-xl relative -top-0.5 mx-1" />
          Clear all
        </Button>
      );
    } else {
      return (
        <Button disabled={initialWidget}>
          <BiBomb className="inline-block text-xl relative -top-0.5 mx-1" />
          Clear all
        </Button>
      );
    }
  };
  const clearAll = () => {
    setError('');
    setShowModal(false);
    setShowModalJustSay(false);
    setShowModalCounter(false);
    setJustSayWidgets([]);
    setCounterWidgets([]);
    setTimerWidgets([]);
    setInitialWidget(true);
  };
  const handleWidgets = () => {
    if (!initialWidget) {
      return (
        <>
          <JustSayList justSayWidgets={justSayWidgets} />
          <CounterList counterWidgets={counterWidgets} getTimer={getTimer} />
          <TimerList timerWidgets={timerWidgets} />
        </>
      );
    } else {
      return (
        <Card>
          <div className="text-center text-gray-400 my-8 font-light">
            <p className="text-4xl mb-2">No widgets at all</p>
            <p>
              Click &nbsp;
              <button
                className="font-normal text-blue-400 focus:outline-none"
                onClick={openModal('modal')}
              >
                here
              </button>
              &nbsp; to add a new one
            </p>
          </div>
        </Card>
      );
    }
  };

  return (
    <>
      <h2 className="text-2xl">Widgets</h2>
      <div className="pt-3">
        <div className="mb-4">
          <Button onClick={openModal('modal')}>
            <RiAddCircleLine className="inline-block text-xl relative -top-0.5 mx-1" />
            Add Widgets
          </Button>
          {handleClearButton()}
          <Modal
            show={showModal}
            title={'Add widget'}
            onCancel={() => setShowModal(false)}
          >
            <div className="flex flex-wrap text-center mt-1.5 -ml-1.5">
              <WidgetModal
                icon={AiOutlineMessage}
                title={'Just Says'}
                onClick={openModal('formJustSay')}
              >
                <AiOutlineMessage className={iconClass} />
              </WidgetModal>
              <WidgetModal
                icon={AiOutlineMessage}
                title={'Counter'}
                onClick={openModal('formAddCounter')}
              >
                <RiIncreaseDecreaseLine className={iconClass} />
              </WidgetModal>
              <WidgetModal
                icon={AiOutlineMessage}
                title={'Timer'}
                onClick={getTimer}
              >
                <IoTimerOutline className={iconClass} />
              </WidgetModal>
            </div>
          </Modal>
          <Modal
            show={showModalJustSay}
            title={'Add JustSay'}
            onCancel={() => setShowModalJustSay(false)}
          >
            <Form onSubmit={handleFormJustSay} error={error}>
              <input
                type="text"
                name="title"
                className="w-full px-2.5 py-1 focus:outline-none rounded-md"
              />
            </Form>
          </Modal>

          <Modal
            show={showModalCounter}
            title={'Add counter'}
            onCancel={() => setShowModalCounter(false)}
          >
            <Form onSubmit={handleFormCounter} error={error}>
              <input
                type="number"
                placeholder="initial number"
                name="num"
                className="w-full px-2.5 py-1 focus:outline-none rounded-md"
              />
            </Form>
          </Modal>
        </div>
        <div className="md:flex md:flex-wrap md:-mr-4">{handleWidgets()}</div>
      </div>
    </>
  );
};

Home.Layout = MainLayout;

export default Home;

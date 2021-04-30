import { AiOutlineMessage } from 'react-icons/ai';
import { RiIncreaseDecreaseLine } from 'react-icons/ri';
import { IoTimerOutline } from 'react-icons/io5';
import WidgetModal from '../widgets/WidgetModal';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { GiAbstract024 } from 'react-icons/gi';
import {
  showModalContentState,
  showModalActiveState,
  listAllWidgetsState,
  defaultShoutState,
} from '../States';
import { useRecoilState } from 'recoil';
import GetJson from '../../helpers/getJsonFormat';
import FormInputText from '../form/FormInputText';
import FormCounter from '../form/FormCounter';
import FormCustom from '../form/FormCustom';

const AddWidgetPanel = () => {
  const iconClass = 'text-4xl mx-auto';

  const [listAllWidgets, setListAllWidgets] = useRecoilState(
    listAllWidgetsState
  );
  const [showModalActive, setShowModalActive] = useRecoilState(
    showModalActiveState
  );
  const [showModalContent, setShowModalContent] = useRecoilState(
    showModalContentState
  );
  const [defaultShout, setDefaultShout] = useRecoilState(defaultShoutState);
  const onAddListAllWidgetState = (value = '', type) => {
    const getData = GetJson(value, type);
    if (type === 'JustShout' && listAllWidgets.length > 0) {
      const temp = _.cloneDeep(listAllWidgets);
      temp.map((data) => {
        if (data.type === 'JustShout') {
          setDefaultShout(value);
          data.value = value;
        }
      });
      setListAllWidgets([...temp, getData]);
    } else {
      setListAllWidgets([...listAllWidgets, getData]);
    }

    setShowModalActive(false);
  };

  const handleOnClick = (type, addType = true, listId = 0, list) => {
    if (type === 'JustSay' || type === 'JustShout') {
      setShowModalContent(
        <FormInputText
          onAdd={onAddListAllWidgetState}
          addType={addType}
          type={type}
        />
      );
    }
    if (type === 'counter') {
      setShowModalContent(<FormCounter onAdd={onAddListAllWidgetState} />);
    }
    if (type === 'timer') {
      onAddListAllWidgetState('', 'timer');
    }
    if (type === 'Weather') {
      setShowModalContent(
        <FormInputText
          onAdd={onAddListAllWidgetState}
          addType={addType}
          type={type}
        />
      );
    }
    if (type === 'Custom') {
      setShowModalContent(
        <FormCustom
          type={type}
          onAdd={onAddListAllWidgetState}
          addType={addType}
        />
      );
    }
  };

  const widgetModalList = [
    {
      id: 1,
      title: 'Just Says',
      type: 'JustSay',
      Icon: <AiOutlineMessage className={iconClass} />,
    },
    {
      id: 6,
      title: 'Shout',
      type: 'JustShout',
      Icon: <HiOutlineSpeakerphone className={iconClass} />,
    },
    {
      id: 2,
      title: 'Counter',
      type: 'counter',
      Icon: <RiIncreaseDecreaseLine className={iconClass} />,
    },
    {
      id: 3,
      title: 'Timer',
      type: 'timer',
      Icon: <IoTimerOutline className={iconClass} />,
    },
    {
      id: 4,
      title: 'Weather',
      type: 'Weather',
      Icon: <TiWeatherPartlySunny className={iconClass} />,
    },
    {
      id: 5,
      title: '24 Games',
      type: 'Custom',
      Icon: <GiAbstract024 className={iconClass} />,
    },
  ];

  return (
    <>
      <div className="text-xl mb-1">Add Widgets</div>
      <div className="flex flex-wrap text-center mt-1.5 -ml-1.5">
        {widgetModalList.map((widgetModal) => {
          return (
            <WidgetModal
              key={widgetModal.id}
              title={widgetModal.title}
              onClick={() => handleOnClick(widgetModal.type)}
            >
              {widgetModal.Icon}
            </WidgetModal>
          );
        })}
      </div>
    </>
  );
};

export default AddWidgetPanel;

import { AiOutlineMessage } from 'react-icons/ai';
import { RiIncreaseDecreaseLine } from 'react-icons/ri';
import { IoTimerOutline } from 'react-icons/io5';
import WidgetModal from '../widgets/WidgetModal';
import GetJson from '../../helpers/getJsonFormat';

const WidgetModalList = ({
  openModal,
  getJson,
  listAllWidgets,
  setListAllWidgets,
  setShowModal,
}) => {
  const getTimer = () => {
    const getData = GetJson(listAllWidgets, '', 'timer');
    setListAllWidgets([...listAllWidgets, getData]);
    setShowModal(false);
  };
  const iconClass = 'text-4xl mx-auto';

  return (
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
      <WidgetModal icon={AiOutlineMessage} title={'Timer'} onClick={getTimer}>
        <IoTimerOutline className={iconClass} />
      </WidgetModal>
    </div>
  );
};

export default WidgetModalList;

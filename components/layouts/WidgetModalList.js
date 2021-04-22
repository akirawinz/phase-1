import { AiOutlineMessage } from 'react-icons/ai';
import { RiIncreaseDecreaseLine } from 'react-icons/ri';
import { IoTimerOutline } from 'react-icons/io5';
import WidgetModal from '../widgets/WidgetModal';

const WidgetModalList = ({ handleOnClick }) => {
  const iconClass = 'text-4xl mx-auto';

  return (
    <>
      <div className="text-xl mb-1">Add Widgets</div>
      <div className="flex flex-wrap text-center mt-1.5 -ml-1.5">
        <WidgetModal
          icon={AiOutlineMessage}
          title={'Just Says'}
          onClick={() => {
            handleOnClick('justSay');
          }}
        >
          <AiOutlineMessage className={iconClass} />
        </WidgetModal>
        <WidgetModal
          icon={AiOutlineMessage}
          title={'Counter'}
          onClick={() => {
            handleOnClick('counter');
          }}
        >
          <RiIncreaseDecreaseLine className={iconClass} />
        </WidgetModal>
        <WidgetModal
          icon={AiOutlineMessage}
          title={'Timer'}
          onClick={() => {
            handleOnClick('timer');
          }}
        >
          <IoTimerOutline className={iconClass} />
        </WidgetModal>
      </div>
    </>
  );
};

export default WidgetModalList;

import { AiOutlineMessage } from 'react-icons/ai';
import { RiIncreaseDecreaseLine } from 'react-icons/ri';
import { IoTimerOutline } from 'react-icons/io5';
import WidgetModal from '../widgets/WidgetModal';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { GiAbstract024 } from 'react-icons/gi';
import ModalContent from '../template/ModalContent';
const WidgetModalList = ({ handleOnClick }) => {
  const iconClass = 'text-4xl mx-auto';

  // const test = () => {
  //   return <ModalContent />;
  // };

  return (
    <>
      <div className="text-xl mb-1">Add Widgets</div>
      <div className="flex flex-wrap text-center mt-1.5 -ml-1.5">
        <WidgetModal
          icon={AiOutlineMessage}
          title={'Just Says'}
          onClick={() => {
            handleOnClick('JustSay');
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
        <WidgetModal
          icon={HiOutlineSpeakerphone}
          title={'Shout'}
          onClick={() => {
            handleOnClick('JustShout');
          }}
        >
          <HiOutlineSpeakerphone className={iconClass} />
        </WidgetModal>
        <WidgetModal
          icon={TiWeatherPartlySunny}
          title={'Weather'}
          onClick={() => {
            handleOnClick('Weather');
          }}
        >
          <TiWeatherPartlySunny className={iconClass} />
        </WidgetModal>
        <WidgetModal
          icon={GiAbstract024}
          title={'24 Games'}
          onClick={() => {
            handleOnClick('Custom');
          }}
        >
          <GiAbstract024 className={iconClass} />
        </WidgetModal>
      </div>
    </>
  );
};

export default WidgetModalList;

import _ from 'lodash';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { RiAddCircleLine } from 'react-icons/ri';
import { BiBomb } from 'react-icons/bi';
import Button from '../Button';
import Modal from '../Modal';
import AddWidgetPanel from '../layouts/AddWidgetPanel';
import ModalSetting from '../template/ModalSetting';
import ListAllWidget from '../widgets/ListAllWidget';
import {
  showModalContentState,
  showModalActiveState,
  listAllWidgetsState,
  defaultShoutState,
} from '../States';

const ModalList = () => {
  const [error, setError] = useState('');
  const [showModalActive, setShowModalActive] = useRecoilState(
    showModalActiveState
  );
  const [showModalContent, setShowModalContent] = useRecoilState(
    showModalContentState
  );
  const [listAllWidgets, setListAllWidgets] = useRecoilState(
    listAllWidgetsState
  );
  const [defaultShout, setDefaultShout] = useRecoilState(defaultShoutState);

  const openInitialModal = () => {
    setShowModalActive(true);
    setShowModalContent(<AddWidgetPanel />);
  };

  const openSettingModal = () => {
    setShowModalActive(true);
    setShowModalContent(<ModalSetting onEdit={onHandleEdit}></ModalSetting>);
  };

  const onHandleEdit = (listId, value, type = '') => {
    const temp = _.cloneDeep(listAllWidgets);
    temp.map((data) => {
      switch (data.type) {
        case 'JustShout':
          setDefaultShout(value);
          data.value = value;
          break;
        default:
          if (data.id === listId) {
            data.value = value;
          }
          break;
      }
    });
    setListAllWidgets(temp);
    setShowModalActive(false);
  };

  const onHandleDelete = (listId) => {
    const temp = _.cloneDeep(listAllWidgets);
    const newData = temp.filter((data) => {
      return data.id !== listId;
    });
    setListAllWidgets(newData);
  };

  const showDataModals = () => {
    return (
      <Modal show={showModalActive} onCancel={() => setShowModalActive(false)}>
        {showModalContent}
      </Modal>
    );
  };

  return (
    <div className="pt-3">
      <div className="mb-4">
        <Button onClick={openInitialModal}>
          <RiAddCircleLine className="inline-block text-xl relative -top-0.5 mx-1" />
          Add Widgets
        </Button>
        <Button onClick={openSettingModal} color={'gray'}>
          <BiBomb className="inline-block text-xl relative -top-0.5 mx-1" />
          Setting
        </Button>
        {showDataModals('Add Widgets')}
      </div>
      <div className="md:flex md:flex-wrap md:-mr-4">
        <ListAllWidget
          onEdit={onHandleEdit}
          onHandleDelete={onHandleDelete}
          openInitialModal={openInitialModal}
        />
      </div>
    </div>
  );
};

export default ModalList;

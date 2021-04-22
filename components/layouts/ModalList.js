import { useState } from 'react';
import { RiAddCircleLine } from 'react-icons/ri';
import { BiBomb } from 'react-icons/bi';
import Button from '../Button';
import Modal from '../Modal';
import WidgetModalList from '../layouts/WidgetModalList';
import ModalSetting from '../template/ModalSetting';
import ListAllWidget from '../widgets/ListAllWidget';
import GetJson from '../../helpers/getJsonFormat';
import FormJustSay from '../form/FormJustSay';
import FormCounter from '../form/FormCounter';
import _ from 'lodash';
//recoil
import { useRecoilState } from 'recoil';
import {
  showModalContentState,
  showModalActiveState,
  listAllWidgetsState,
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

  const openInitialModal = () => {
    setShowModalActive(true);
    setShowModalContent(<WidgetModalList handleOnClick={handleOnClick} />);
  };

  const openSettingModal = () => {
    setShowModalActive(true);
    setShowModalContent(<ModalSetting></ModalSetting>);
  };

  const onAddListAllWidgetState = (value = '', type) => {
    const getData = GetJson(value, type);
    setListAllWidgets([...listAllWidgets, getData]);
    setShowModalActive(false);
  };

  const onHandleEdit = (listId, value) => {
    const temp = _.cloneDeep(listAllWidgets);
    temp.map((data) => {
      if (data.id === listId) {
        data.value = value;
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

  const handleOnClick = (type, addType = true, listId = 0) => {
    if (type === 'justSay') {
      setShowModalContent(
        <FormJustSay
          onAdd={onAddListAllWidgetState}
          onEdit={onHandleEdit}
          addType={addType}
          listId={listId}
        />
      );
    }
    if (type === 'counter') {
      setShowModalContent(<FormCounter onAdd={onAddListAllWidgetState} />);
    }
    if (type === 'timer') {
      onAddListAllWidgetState('', 'timer');
    }
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
          handleOnClick={handleOnClick}
          onHandleDelete={onHandleDelete}
        />
      </div>
    </div>
  );
};

export default ModalList;

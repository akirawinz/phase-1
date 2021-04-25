import { useState } from 'react';
import { RiAddCircleLine } from 'react-icons/ri';
import { BiBomb } from 'react-icons/bi';
import axios from 'axios';
import Button from '../Button';
import Modal from '../Modal';
import WidgetModalList from '../layouts/WidgetModalList';
import ModalSetting from '../template/ModalSetting';
import ListAllWidget from '../widgets/ListAllWidget';
import GetJson from '../../helpers/getJsonFormat';
import FormJustSayAndWeather from '../form/FormJustSayAndWeather';
import FormCounter from '../form/FormCounter';
import FormCustom from '../form/FormCustom';
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
    setShowModalContent(<ModalSetting onEdit={onHandleEdit}></ModalSetting>);
  };

  const onAddListAllWidgetState = (value = '', type) => {
    const getData = GetJson(value, type);
    setListAllWidgets([...listAllWidgets, getData]);
    setShowModalActive(false);
  };

  const onHandleEdit = (listId, value, type = '') => {
    const temp = _.cloneDeep(listAllWidgets);
    temp.map((data) => {
      if (data.type === 'JustShout') {
        data.value = value;
      } else {
        if (data.id === listId) {
          data.value = value;
        }
      }
    });
    setListAllWidgets(temp);
    setShowModalActive(false);
  };

  const searchAns = async (list) => {
    const url = 'http://localhost:3333/api/test';
    let payload = {
      data: list.value,
    };
    const data = await axios
      .post(url, payload)
      .then((res) => {
        return res.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return data;
  };
  const onHandleEditCustom = (listId, value, method, type = '') => {
    const temp = _.cloneDeep(listAllWidgets);
    temp.map((data) => {
      if (data.id === listId) {
        data.value = value;
      }
    });
    console.log('z');
    setListAllWidgets(temp);
    setShowModalActive(false);
  };

  const mapNewCustom = (list, method) => {
    const temp = _.cloneDeep(listAllWidgets);
    const mapData = temp.map((data) => {
      if (data.id === list.id) {
        console.log('xx');
        return { ...data, method: method };
      } else {
        return data;
      }
    });
    setListAllWidgets(mapData);
  };

  const onHandleDelete = (listId) => {
    const temp = _.cloneDeep(listAllWidgets);
    const newData = temp.filter((data) => {
      return data.id !== listId;
    });
    setListAllWidgets(newData);
  };

  const defaultEditShout = () => {
    const temp = _.cloneDeep(listAllWidgets);
    let reversedArray = temp
      .reverse()
      .filter((data) => data.type === 'JustShout');

    return reversedArray.length > 0 ? reversedArray[0].value : '';
  };

  const handleOnClick = (type, addType = true, listId = 0, list) => {
    if (type === 'JustSay' || type === 'JustShout') {
      const defaultValue = defaultEditShout();
      setShowModalContent(
        <FormJustSayAndWeather
          onAdd={onAddListAllWidgetState}
          onEdit={onHandleEditCustom}
          addType={addType}
          listId={listId}
          list={list}
          defaultValue={defaultValue}
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
        <FormJustSayAndWeather
          onAdd={onAddListAllWidgetState}
          onEdit={onHandleEdit}
          addType={addType}
          listId={listId}
          list={list}
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
          onEdit={onHandleEdit}
          list={list}
        />
      );
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
          mapNewCustom={mapNewCustom}
          searchAns={searchAns}
        />
      </div>
    </div>
  );
};

export default ModalList;

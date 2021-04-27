import { useEffect, useState } from 'react';
import { RiAddCircleLine } from 'react-icons/ri';
import { BiBomb } from 'react-icons/bi';
import axios from 'axios';
import Button from '../Button';
import Modal from '../Modal';
import WidgetModalList from '../layouts/WidgetModalList';
import ModalSetting from '../template/ModalSetting';
import ListAllWidget from '../widgets/ListAllWidget';
import GetJson from '../../helpers/getJsonFormat';
import FormInputText from '../form/FormInputText';
import FormCounter from '../form/FormCounter';
import FormCustom from '../form/FormCustom';
import _ from 'lodash';
//recoil
import { useRecoilState } from 'recoil';
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
    setShowModalContent(<WidgetModalList handleOnClick={handleOnClick} />);
  };

  const openSettingModal = () => {
    setShowModalActive(true);
    setShowModalContent(<ModalSetting onEdit={onHandleEdit}></ModalSetting>);
  };

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

  const onHandleEdit = (listId, value, type = '', newValue) => {
    const temp = _.cloneDeep(listAllWidgets);
    temp.map((data) => {
      switch (data.type) {
        case 'JustShout':
          setDefaultShout(value);
          data.value = value;
          break;
        case 'Weather':
          if (data.id === listId) {
            data.value = value;
          }
          break;
        default:
          if (data.id === listId) {
            data.value = value;
          }
          break;
      }
    });
    console.log(temp);
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
        if (!error.response) {
          alert('please connect database');
        }
      });
    return data;
  };

  const getJsonData = (data, temp) => {
    return {
      value: data.name,
      weather: data.weather[0].main,
      description: data.weather[0].description,
      icon:
        'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png',
      temp: temp,
    };
  };
  // const onHandleEditWeather = async (listId, value, type = '') => {
  //   const weather = await searchWeather(value);
  //   const temp = _.cloneDeep(listAllWidgets);
  //   temp.map((data) => {
  //     if (data.id === listId) {
  //       data.value = value;
  //       data.weather = weather;
  //     }
  //   });
  //   setListAllWidgets(temp);
  //   setShowModalActive(false);
  // };
  const onHandleEditCustom = async (listId, value, type = '') => {
    const temp = _.cloneDeep(listAllWidgets);
    const list = { value };
    const method = await searchAns(list);
    temp.map((data) => {
      if (data.id === listId) {
        data.value = value;
        data.method = method;
      }
    });
    setListAllWidgets(temp);
    setShowModalActive(false);
  };

  const mapNewCustom = (list, method) => {
    const temp = _.cloneDeep(listAllWidgets);
    const mapData = temp.map((data) => {
      if (data.id === list.id) {
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

  const handleOnClick = (type, addType = true, listId = 0, list) => {
    if (type === 'JustSay' || type === 'JustShout') {
      setShowModalContent(
        <FormInputText
          onAdd={onAddListAllWidgetState}
          onEdit={onHandleEdit}
          addType={addType}
          listId={listId}
          list={list}
          defaultValue={defaultShout}
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
          onEdit={onHandleEditCustom}
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
          getJsonData={getJsonData}
          openInitialModal={openInitialModal}
        />
      </div>
    </div>
  );
};

export default ModalList;

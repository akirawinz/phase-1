import { useRecoilState } from 'recoil';
import _ from 'lodash';
import { useEffect } from 'react';
import { MdEdit } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { MdRefresh } from 'react-icons/md';
import FormInputText from '../form/FormInputText';
import Card from '../../components/template/Card';
import CardNone from '../template/CardNone';
import JustSay from '../../components/widgets/JustSay';
import FormCustom from '../form/FormCustom';
import Weather from '../../components/widgets/Weather';
import Counter from '../../components/widgets/Counter';
import Custom from '../../components/widgets/Custom';
import Timer from '../../components/widgets/Timer';
import Button from '../Button';
import CurrentDate from '../../helpers/currentDate';
import {
  listAllWidgetsState,
  showModalActiveState,
  onRefreshState,
  zeroState,
  defaultShoutState,
  showModalContentState,
} from '../States';

const ListAllWidget = ({
  onEdit,
  onHandleDelete,
  openInitialModal,
  searchAns,
}) => {
  const [listAllWidgets, setListAllWidgets] = useRecoilState(
    listAllWidgetsState
  );
  const [showModalActive, setShowModalActive] = useRecoilState(
    showModalActiveState
  );
  const [defaultShout, setDefaultShout] = useRecoilState(defaultShoutState);
  const [zero, setZero] = useRecoilState(zeroState);
  const getAllListWidgets = listAllWidgets.slice().sort((a, b) => {
    return b.id - a.id;
  });
  const [onRefresh, setOnRefresh] = useRecoilState(onRefreshState);
  const [showModalContent, setShowModalContent] = useRecoilState(
    showModalContentState
  );
  // useEffect(() => {
  //   if (listAllWidgets.length > 0) {
  //     localStorage.setItem('listAllWidgets', JSON.stringify(listAllWidgets));
  //     localStorage.setItem('defaultShout', JSON.stringify(defaultShout));
  //   }
  // }, [listAllWidgets]);
  //
  // useEffect(() => {
  //   let localStorageListAllWidget = localStorage.getItem('listAllWidgets');
  //   localStorageListAllWidget = JSON.parse(localStorageListAllWidget);
  //   let localStorageDefaultShout = localStorage.getItem('defaultShout');
  //   localStorageDefaultShout = JSON.parse(localStorageDefaultShout);
  //   if (localStorageListAllWidget) {
  //     if (localStorageListAllWidget.length > 0) {
  //       setListAllWidgets(localStorageListAllWidget);
  //       setDefaultShout(localStorageDefaultShout);
  //     }
  //   }
  // }, []);
  const handleEditOnClick = (type, addType = true, listId = 0, list) => {
    if (type === 'JustSay' || type === 'JustShout') {
      setShowModalContent(
        <FormInputText
          onEdit={onEdit}
          addType={addType}
          listId={listId}
          list={list}
          defaultValue={defaultShout}
          type={type}
        />
      );
    }

    if (type === 'Weather') {
      setShowModalContent(
        <FormInputText
          onEdit={onEdit}
          addType={addType}
          listId={listId}
          list={list}
          type={type}
        />
      );
    }
    if (type === 'Custom') {
      setShowModalContent(
        <FormCustom type={type} onEdit={onEdit} addType={addType} list={list} />
      );
    }
  };

  const mapNewData = (list, value) => {
    const temp = _.cloneDeep(listAllWidgets);
    const mapData = temp.map((data) => {
      switch (list.type) {
        case 'Weather':
          if (data.id === list.id) {
            data.currentTime = CurrentDate();
            return { ...data, weather: value };
          } else {
            return data;
          }
          break;
        case 'Custom':
          if (data.id === list.id) {
            return { ...data, method: value };
          } else {
            return data;
          }
          break;
        case 'timer':
          if (zero === 'timer' && data.type === 'timer') {
            setZero('');
            return { ...data, value: 0 };
          }
          if (data.id === list.id) {
            return { ...data, value };
          } else {
            return data;
          }

          break;
        case 'counter':
          if (zero === 'counter' && data.type === 'counter') {
            setZero('');
            return { ...data, value: 0 };
          }
          if (data.id === list.id) {
            return { ...data, value };
          } else {
            return data;
          }
          break;
        default:
          if (data.id === list.id) {
            return { ...data, value };
          } else {
            return data;
          }
          break;
      }
    });
    setListAllWidgets(mapData);
  };

  const buttonDeleteAndEdit = (list) => {
    let refreshButton;
    let editButton;
    if (list.type === 'Weather') {
      refreshButton = (
        <Button
          icon={true}
          onClick={() => {
            setOnRefresh(true);
          }}
        >
          <MdRefresh />
        </Button>
      );
    }
    if (list.type !== 'timer' && list.type !== 'counter') {
      editButton = (
        <Button
          icon={true}
          onClick={() => {
            handleEditOnClick(list.type, false, list.id, list);
            setShowModalActive(true);
          }}
        >
          <MdEdit />
        </Button>
      );
    }
    return (
      <div className="absolute top-5 right-5">
        {refreshButton}
        {editButton}
        <Button
          icon={true}
          onClick={() => {
            onHandleDelete(list.id);
          }}
        >
          <IoMdClose />
        </Button>
      </div>
    );
  };
  if (getAllListWidgets.length > 0) {
    return getAllListWidgets.map((list) => {
      switch (list.type) {
        case 'JustShout':
        case 'JustSay':
          return (
            <Card title={list.type} key={list.id}>
              {buttonDeleteAndEdit(list)}
              <JustSay justSayTitle={list.value} />
            </Card>
          );
          break;
        case 'Weather':
          return (
            <Card
              title={list.type}
              key={list.id}
              currentTime={list.currentTime}
            >
              {buttonDeleteAndEdit(list)}
              <Weather list={list} mapNewData={mapNewData} />
            </Card>
          );
          break;
        case 'timer':
          return (
            <Card title="Timer" key={list.id}>
              {buttonDeleteAndEdit(list)}
              <Timer list={list} mapNewData={mapNewData} />
            </Card>
          );
          break;
        case 'counter':
          return (
            <Card title="Counter" key={list.id}>
              {buttonDeleteAndEdit(list)}
              <Counter
                list={list}
                getNum={list.value}
                mapNewData={mapNewData}
              />
            </Card>
          );
          break;
        case 'Custom':
          return (
            <Card title="Custom" key={list.id}>
              {buttonDeleteAndEdit(list)}
              <Custom
                list={list}
                mapNewData={mapNewData}
                searchAns={searchAns}
              />
            </Card>
          );
          break;
      }
    });
  } else {
    return <CardNone openInitialModal={openInitialModal} />;
  }
};

export default ListAllWidget;

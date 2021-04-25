import { useRecoilState } from 'recoil';
import { MdEdit } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import _ from 'lodash';
import Card from '../../components/template/Card';
import CardNone from '../template/CardNone';
import JustSay from '../../components/widgets/JustSay';
import Weather from '../../components/widgets/Weather';
import Counter from '../../components/widgets/Counter';
import Custom from '../../components/widgets/Custom';
import Timer from '../../components/widgets/Timer';
import Button from '../Button';
import CurrentDate from '../../helpers/currentDate';
import { MdRefresh } from 'react-icons/md';
import {
  listAllWidgetsState,
  showModalActiveState,
  onRefreshState,
} from '../States';

const ListAllWidget = ({
  mapNewCustom,
  onHandleDelete,
  openInitialModal,
  handleOnClick,
  searchAns,
}) => {
  const [listAllWidgets, setListAllWidgets] = useRecoilState(
    listAllWidgetsState
  );
  const [showModalActive, setShowModalActive] = useRecoilState(
    showModalActiveState
  );

  const getAllListWidgets = listAllWidgets.slice().sort((a, b) => {
    return b.id - a.id;
  });
  const [onRefresh, setOnRefresh] = useRecoilState(onRefreshState);

  const mapNewData = (list, value) => {
    const temp = _.cloneDeep(listAllWidgets);
    const mapData = temp.map((data) => {
      if (data.id === list.id) {
        return { ...data, value };
      } else {
        return data;
      }
    });
    setListAllWidgets(mapData);
  };
  const mapNewDate = (list, weather) => {
    const temp = _.cloneDeep(listAllWidgets);
    const mapData = temp.map((data) => {
      if (data.id === list.id) {
        data.currentTime = CurrentDate();
        return { ...data, weather };
      } else {
        return data;
      }
    });
    setListAllWidgets(mapData);
  };
  // const mapNewCustom = (list, method) => {
  //   const temp = _.cloneDeep(listAllWidgets);
  //   const mapData = temp.map((data) => {
  //     if (data.id === list.id) {
  //       console.log('xx');
  //       return { ...data, method: method };
  //     } else {
  //       return data;
  //     }
  //   });
  //   setListAllWidgets(mapData);
  // };

  if (getAllListWidgets.length > 0) {
    return getAllListWidgets.map((list) => {
      switch (list.type) {
        case 'JustShout':
        case 'JustSay':
          return (
            <Card title={list.type} key={list.id}>
              <div className="absolute top-5 right-5">
                <Button
                  icon={true}
                  onClick={() => {
                    onHandleDelete(list.id);
                  }}
                >
                  <IoMdClose />
                </Button>
                <Button
                  icon={true}
                  onClick={() => {
                    handleOnClick(list.type, false, list.id, list);
                    setShowModalActive(true);
                  }}
                >
                  <MdEdit />
                </Button>
              </div>
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
              <div className="absolute top-5 right-5">
                <Button
                  icon={true}
                  onClick={() => {
                    setOnRefresh(true);
                  }}
                >
                  <MdRefresh />
                </Button>

                <Button
                  icon={true}
                  onClick={() => {
                    onHandleDelete(list.id);
                  }}
                >
                  <IoMdClose />
                </Button>

                <Button
                  icon={true}
                  onClick={() => {
                    handleOnClick(list.type, false, list.id, list);
                    setShowModalActive(true);
                  }}
                >
                  <MdEdit />
                </Button>
              </div>
              <Weather list={list} mapNewDate={mapNewDate} />
            </Card>
          );
          break;

        case 'timer':
          return (
            <Card title="Timer" key={list.id}>
              <div className="absolute top-5 right-5">
                <Button
                  icon={true}
                  onClick={() => {
                    onHandleDelete(list.id);
                  }}
                >
                  <IoMdClose />
                </Button>
              </div>
              <Timer
                listAllWidgets={listAllWidgets}
                list={list}
                mapNewData={mapNewData}
                setListAllWidgets={setListAllWidgets}
              />
            </Card>
          );
          break;
        case 'counter':
          return (
            <Card title="Counter" key={list.id}>
              <div className="absolute top-5 right-5">
                <Button
                  icon={true}
                  onClick={() => {
                    onHandleDelete(list.id);
                  }}
                >
                  <IoMdClose />
                </Button>
              </div>
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
              <div className="absolute top-5 right-5">
                <Button
                  icon={true}
                  onClick={() => {
                    onHandleDelete(list.id);
                  }}
                >
                  <IoMdClose />
                </Button>
                <Button
                  icon={true}
                  onClick={() => {
                    handleOnClick(list.type, false, list.id, list);
                    setShowModalActive(true);
                  }}
                >
                  <MdEdit />
                </Button>
              </div>
              <Custom
                list={list}
                mapNewCustom={mapNewCustom}
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
import { useRecoilState } from 'recoil';
import { MdEdit } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import _ from 'lodash';
import Card from '../../components/template/Card';
import CardNone from '../template/CardNone';
import JustSay from '../../components/widgets/JustSay';
import Counter from '../../components/widgets/Counter';
import Timer from '../../components/widgets/Timer';
import Button from '../Button';
import { listAllWidgetsState, showModalActiveState } from '../States';
const ListAllWidget = ({ onHandleDelete, openInitialModal, handleOnClick }) => {
  const [listAllWidgets, setListAllWidgets] = useRecoilState(
    listAllWidgetsState
  );
  const [showModalActive, setShowModalActive] = useRecoilState(
    showModalActiveState
  );

  const getAllListWidgets = listAllWidgets.slice().sort((a, b) => {
    return b.id - a.id;
  });

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

  if (getAllListWidgets.length > 0) {
    return getAllListWidgets.map((list) => {
      switch (list.type) {
        case 'justSay':
          return (
            <Card
              title="Just Says"
              currentTime={list.currentTime}
              key={list.id}
            >
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
                    handleOnClick('justSay', false, list.id, list);
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

        case 'timer':
          return (
            <Card title="Timer" key={list.id} currentTime={list.currentTime}>
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
            <Card title="Counter" key={list.id} currentTime={list.currentTime}>
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
      }
    });
  } else {
    return <CardNone openInitialModal={openInitialModal} />;
  }
};

export default ListAllWidget;

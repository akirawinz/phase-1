import Card from '../../components/template/Card';
import JustSay from '../../components/widgets/JustSay';
import Counter from '../../components/widgets/Counter';
import Timer from '../../components/widgets/Timer';
import Modal from '../Modal';
import FormJustSay from '../form/FormJustSay';
import { useState } from 'react';

const ListAllWidget = ({
  getAllListWidgets,
  zero,
  listAllWidgets,
  setShowModalJustSay,
  openModal,
  setListAllWidgets,
  showModalEditJustSay,
  setShowModalEditJustSay,
}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditJustSay = () => {
    setShowEditModal(false);
    console.log('zzz');
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
              setShowEditModal={() => {
                setShowEditModal(true);
              }}
              onClick={() =>
                setListAllWidgets(
                  listAllWidgets.filter((data) => data.id !== list.id)
                )
              }
              openModal={openModal}
            >
              <JustSay justSayTitle={list.value} />
              <Modal
                show={showEditModal}
                title={'Edit JustSay'}
                onCancel={() => setShowEditModal(false)}
              >
                {list.id}
                <FormJustSay
                  setListAllWidgets={setListAllWidgets}
                  setShowModalJustSay={setShowModalJustSay}
                  listAllWidgets={listAllWidgets}
                  addType={false}
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleEditJustSay(list);
                  }}
                />
              </Modal>
            </Card>
          );
          break;

        case 'timer':
          return (
            <Card
              title="Timer"
              key={list.id}
              currentTime={list.currentTime}
              onClick={() =>
                setListAllWidgets(
                  listAllWidgets.filter((data) => data.id !== list.id)
                )
              }
            >
              <Timer
                listAllWidgets={listAllWidgets}
                list={list}
                zero={zero}
                setListAllWidgets={setListAllWidgets}
              />
            </Card>
          );
          break;
        case 'counter':
          return (
            <Card
              title="Counter"
              key={list.id}
              currentTime={list.currentTime}
              onClick={() =>
                setListAllWidgets(
                  listAllWidgets.filter((data) => data.id !== list.id)
                )
              }
            >
              <Counter getNum={list.value} zero={zero} />
            </Card>
          );
          break;
      }
    });
  } else {
    return <p></p>;
  }
};

export default ListAllWidget;

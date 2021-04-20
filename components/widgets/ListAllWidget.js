import Card from '../../components/template/Card';
import JustSay from '../../components/widgets/JustSay';
import Counter from '../../components/widgets/Counter';
import Timer from '../../components/widgets/Timer';

const ListAllWidget = ({
  getAllListWidgets,
  zero,
  listAllWidgets,
  setListAllWidgets,
}) => {
  if (getAllListWidgets.length > 0) {
    return getAllListWidgets.map((list) => {
      switch (list.type) {
        case 'justSay':
          return (
            <Card
              title="Just Says"
              key={list.id}
              currentTime={list.currentTime}
            >
              <JustSay justSayTitle={list.value} />
            </Card>
          );
          break;

        case 'timer':
          return (
            <Card title="Timer" key={list.id} currentTime={list.currentTime}>
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
            <Card title="Counter" key={list.id} currentTime={list.currentTime}>
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

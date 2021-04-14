import Card from '../../components/template/Card';
import JustSay from '../../components/widgets/JustSay';
import Counter from '../../components/widgets/Counter';
import Timer from '../../components/widgets/Timer';

const ListAllWidget = ({ getAllListWidgets }) => {
  if (getAllListWidgets.length > 0) {
    return getAllListWidgets.map((list, index) => {
      switch (list.type) {
        case 'justSay':
          return (
            <Card title="Just Says" key={index} currentTime={list.currentTime}>
              <JustSay justSayTitle={list.value} />
            </Card>
          );
          break;

        case 'timer':
          return (
            <Card title="Timer" key={index} currentTime={list.currentTime}>
              <Timer />
            </Card>
          );
          break;
        case 'counter':
          return (
            <Card title="Counter" key={index} currentTime={list.currentTime}>
              <Counter getNum={list.value} />
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

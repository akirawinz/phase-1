import Card from '../../components/template/Card';
import JustSay from '../../components/widgets/JustSay';

const JustSayList = ({ justSayWidgets }) => {
  if (justSayWidgets.length > 0) {
    return justSayWidgets.map((list, index) => {
      return (
        <Card title="Just Says" key={index} currentTime={list.currentTime}>
          <JustSay justSayTitle={list.value} />
        </Card>
      );
    });
  } else {
    return <p></p>;
  }
};

export default JustSayList;

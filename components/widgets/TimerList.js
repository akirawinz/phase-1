import Timer from '../../components/widgets/Timer';
import Card from '../../components/template/Card';
const TimerList = ({ timerWidgets }) => {
  if (timerWidgets.length > 0) {
    return timerWidgets.map((list, index) => {
      return (
        <Card title="Timer" key={index} currentTime={list.currentTime}>
          <Timer />
        </Card>
      );
    });
  }
  return <p></p>;
};

export default TimerList;

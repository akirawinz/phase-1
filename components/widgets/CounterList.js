import Card from '../../components/template/Card';
import Counter from '../../components/widgets/Counter';
const CounterList = ({ counterWidgets }) => {
  if (counterWidgets.length > 0) {
    return counterWidgets.map((list, index) => {
      return (
        <Card title="Counter" key={index} currentTime={list.currentTime}>
          <Counter getNum={list.value} />
        </Card>
      );
    });
  }
  return <p></p>;
};

export default CounterList;

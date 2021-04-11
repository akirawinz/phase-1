import Button from '../Button';
import PolarButton from '../PolarButton';
const Counter = () => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mt-4 mb-6">
        <PolarButton color="gray">-</PolarButton>
        <div className="text-6xl mx-7">0</div>
        <PolarButton color="blue">+</PolarButton>
      </div>
      <Button disabled={true}>Reset</Button>
    </div>
  );
};

export default Counter;

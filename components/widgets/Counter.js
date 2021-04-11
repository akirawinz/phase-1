import Button from '../Button';
const Counter = () => {
  const resetBtnStyled =
    'text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300';
  const addBtnStyled =
    'text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500';
  const minusBtnStyled =
    'text-5xl rounded-full w-10 text-center focus:outline-none text-gray-300';
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mt-4 mb-6">
        <Button btnStyled={minusBtnStyled}>-</Button>
        <div className="text-6xl mx-7">0</div>
        <Button btnStyled={addBtnStyled}>+</Button>
      </div>
      <Button btnStyled={resetBtnStyled}>Reset</Button>
    </div>
  );
};

export default Counter;

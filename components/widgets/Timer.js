import Button from '../Button';
const Timer = () => {
  const btnStyled =
    'text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600';
  const resetBtnStyled =
    ' text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300';
  return (
    <>
      <div className="text-center">
        <div className="flex items-center justify-center mt-4 mb-6">
          <div className="text-5xl mx-7">0:00</div>
        </div>
        <Button btnStyled={btnStyled}>Start</Button>
        &nbsp;
        <Button btnStyled={resetBtnStyled}>Reset</Button>
      </div>
    </>
  );
};

export default Timer;

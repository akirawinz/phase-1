import ResetButton from '../ResetButton';
const Timer = () => {
  return (
    <>
      <div className="text-center">
        <div className="flex items-center justify-center mt-4 mb-6">
          <div className="text-5xl mx-7">0:00</div>
        </div>
        <button className=" text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600">
          Start
        </button>
        &nbsp;
        <ResetButton />
      </div>
    </>
  );
};

export default Timer;

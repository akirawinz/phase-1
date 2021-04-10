import ResetButton from '../ResetButton';
const Counter = () => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mt-4 mb-6">
        <button className="text-5xl rounded-full w-10 text-center focus:outline-none text-gray-300">
          -
        </button>
        <div className="text-6xl mx-7">0</div>
        <button className="text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500">
          +
        </button>
      </div>
      <ResetButton />
    </div>
  );
};

export default Counter;

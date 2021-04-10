import ResetButton from './ResetButton';
const WidgetCounter = () => {
  return (
    <div className="md:break-inside pb-4">
      <div className="pt-2">
        <div className="p-5 border-1 bg-white rounded-2xl">
          <h2 className="text-lg font-bold text-gray-400 mb-1.5">Counter</h2>
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
        </div>
      </div>
    </div>
  );
};

export default WidgetCounter;

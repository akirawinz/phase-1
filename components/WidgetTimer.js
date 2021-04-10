import ResetButton from './ResetButton.js';
const WidgetTimer = () => {
  return (
    <div className="md:break-inside pb-4">
      <div className="pt-5">
        <div className="p-5 border-1 bg-white rounded-2xl">
          <h2 className="text-lg font-bold text-gray-400 mb-1.5">Timer</h2>
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
        </div>
      </div>
    </div>
  );
};

export default WidgetTimer;

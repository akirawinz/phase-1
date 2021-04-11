import Button from '../Button';
const Timer = () => {
  return (
    <>
      <div className="text-center">
        <div className="flex items-center justify-center mt-4 mb-6">
          <div className="text-5xl mx-7">0:00</div>
        </div>
        <Button onClick={() => alert('xx')}>Start</Button>
        &nbsp;
        <Button disabled={true}>Reset</Button>
      </div>
    </>
  );
};

export default Timer;

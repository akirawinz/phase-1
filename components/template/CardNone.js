import Card from '../template/Card';
const CardNone = ({ openModal }) => {
  return (
    <Card>
      <div className="text-center text-gray-400 my-8 font-light">
        <p className="text-4xl mb-2">No widgets at all</p>
        <p>
          Click &nbsp;
          <button
            className="font-normal text-blue-400 focus:outline-none"
            onClick={openModal('modal')}
          >
            here
          </button>
          &nbsp; to add a new one
        </p>
      </div>
    </Card>
  );
};

export default CardNone;

import classNames from 'classnames';
const Card = ({ children, title, currentTime, fullCard = false }) => {
  const styled = classNames('md:inner ', {
    'md:w-1/2 pb-4 md:pr-4': !fullCard,
    'my-4': fullCard,
  });
  return (
    <div className={styled}>
      <div className="p-5 border-1 bg-white rounded-2xl">
        <h2 className="text-lg font-bold text-gray-400 mb-1.5">{title}</h2>
        {children}
        <div className="text-xs text-gray-400">
          <div className="mt-6 -mb-2 text-center">{currentTime}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

const Card = ({ children, title }) => {
  return (
    <div className="md:break-inside pb-4">
      <div className="pt-2">
        <div className="p-5 border-1 bg-white rounded-2xl">
          <h2 className="text-lg font-bold text-gray-400 mb-1.5">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;

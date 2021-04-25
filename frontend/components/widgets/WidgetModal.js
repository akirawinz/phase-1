const WidgetModal = ({ children, title, onClick = () => {} }) => {
  return (
    <>
      <div className="w-1/3 pt-1.5 pl-1.5" onClick={onClick}>
        <div className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer">
          {children}
          <div className="mt-1 font-semibold text-sm ">{title}</div>
        </div>
      </div>
    </>
  );
};
export default WidgetModal;

import classNames from 'classnames';
const Button = ({ children, disabled = false, onClick = () => {} }) => {
  const styled = classNames(
    'text-white focus:outline-none px-4 py-1 rounded-md ',
    {
      'bg-blue-500 hover:bg-blue-600': !disabled,
      'bg-gray-300': disabled,
    }
  );
  return (
    <button className={styled} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

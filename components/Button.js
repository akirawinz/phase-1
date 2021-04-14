import classNames from 'classnames';
const Button = ({
  children,
  color = '',
  disabled = false,
  onClick = () => {},
}) => {
  const styled = classNames(
    'text-white focus:outline-none px-4 py-1 rounded-md m-1',
    {
      'bg-blue-500 hover:bg-blue-600': !disabled && color !== 'red',
      'bg-gray-300': disabled && color !== 'red',
      'bg-red-500 hover:bg-red-600': color === 'red',
    }
  );
  return (
    <button className={styled} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

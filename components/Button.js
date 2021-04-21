import classNames from 'classnames';
const Button = ({
  children,
  color = '',
  disabled = false,
  icon = false,
  wFull = false,
  onClick = () => {},
}) => {
  let styled = classNames(
    'text-white focus:outline-none px-4 py-1 rounded-md m-1',
    {
      'bg-blue-500 hover:bg-blue-600':
        !disabled && color !== 'red' && color !== 'gray',
      'bg-gray-300': disabled && color !== 'red',
      'bg-red-500 hover:bg-red-600 ': color === 'red',
      'w-full': wFull,
      'bg-gray-500 hover:bg-gray-600': color === 'gray',
    }
  );
  if (icon) {
    styled = classNames('text-lg text-gray-600 focus:outline-none ');
  }

  return (
    <button className={styled} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

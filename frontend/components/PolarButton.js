import classNames from 'classnames';
const PolarButton = ({ children, disabled, onClick = () => {} }) => {
  const btnStyled = classNames(
    `text-5xl rounded-full w-10 text-center focus:outline-none `,
    {
      'text-blue-500': !disabled,
      'text-gray-300': disabled,
    }
  );
  return (
    <button className={btnStyled} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default PolarButton;

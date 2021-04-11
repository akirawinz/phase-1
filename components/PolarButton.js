import classNames from 'classnames';
const PolarButton = ({ children, color }) => {
  const btnStyled = classNames(
    `text-5xl rounded-full w-10 text-center focus:outline-none text-${color}-500`
  );
  return <button className={btnStyled}>{children}</button>;
};

export default PolarButton;

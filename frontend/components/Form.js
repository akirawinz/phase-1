import Button from '../components/Button';
const Form = ({
  error,
  title = 'Add',
  type,
  name,
  color,
  inputType = 'text',
  placeHolder = '',
  defaultValue = '',
  disabled,
  onSubmit = (e) => {
    e.preventDefault;
  },
}) => {
  const checkInputType = () => {
    if (inputType === 'text') {
      return (
        <input
          type={type}
          name={name}
          placeholder={placeHolder}
          defaultValue={defaultValue}
          className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
        />
      );
    }
    if (inputType === 'selector') {
      return (
        <select
          name="inputType"
          className="flex-1 mt-1 mr-1.5 py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 text-sm"
        >
          <option value="counter">All Counter</option>
          <option value="timer">Timer</option>
        </select>
      );
    }
  };

  return (
    <>
      <form className="flex" onSubmit={onSubmit}>
        {checkInputType()}
        &nbsp;
        <Button color={color} disabled={disabled}>
          {title}
        </Button>
      </form>
      <p className="text-red-500">{error}</p>
    </>
  );
};

export default Form;

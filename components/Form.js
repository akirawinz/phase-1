import Button from '../components/Button';
const Form = ({
  error,
  type,
  name,
  placeHolder = '',
  onSubmit = (e) => {
    e.preventDefault;
  },
}) => {
  return (
    <>
      <form className="flex" onSubmit={onSubmit}>
        <input
          type={type}
          name={name}
          placeholder={placeHolder}
          className="w-full px-2.5 py-1 focus:outline-none rounded-md"
        />
        &nbsp;
        <Button> Add</Button>
      </form>
      <p className="text-red-500">{error}</p>
    </>
  );
};

export default Form;

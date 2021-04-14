import Button from '../components/Button';
const Form = ({
  children,
  error,
  onSubmit = (e) => {
    e.preventDefault;
  },
}) => {
  return (
    <>
      <form className="flex" onSubmit={onSubmit}>
        {children}
        &nbsp;
        <Button> Add</Button>
      </form>
      <p className="text-red-500">{error}</p>
    </>
  );
};

export default Form;

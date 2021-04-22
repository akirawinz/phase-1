import { useState } from 'react';
import Form from '../Form';
const FormJustSay = ({
  onEdit,
  addType,
  listId,
  onAdd,
  onSubmit = () => {},
}) => {
  const [error, setError] = useState(null);

  const validateInput = (value) => {
    const trim = value.trim().length;
    if (trim < 3) {
      setError('Please enter at least 3 characters.');
      return false;
    }
    return true;
  };

  const handleFormJustSay = (e) => {
    e.preventDefault();
    if (validateInput(e.target.title.value)) {
      setError('');
      onAdd(e.target.title.value, 'justSay');
    }
  };

  const handleFormEditJustSay = (e) => {
    e.preventDefault();
    const value = e.target.title.value;
    if (validateInput(value)) {
      setError('');
      onEdit(listId, value);
    }
  };

  return (
    <>
      <div className="text-xl mb-1">
        {addType ? 'Add JustSay ' : 'Edit JustSay'}{' '}
      </div>
      <Form
        onSubmit={addType ? handleFormJustSay : handleFormEditJustSay}
        error={error}
        type={'text'}
        name={'title'}
      />
    </>
  );
};
export default FormJustSay;

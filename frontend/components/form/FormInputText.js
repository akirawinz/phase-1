import { useState } from 'react';
import Form from '../Form';
import { useRecoilState } from 'recoil';
import { defaultShoutState } from '../States';
const FormInputText = ({
  onEdit,
  addType,
  listId,
  list,
  onAdd,
  type,
  defaultValue,
  title,
  setting,
  disabled = false,
  onSubmit = () => {},
}) => {
  const [error, setError] = useState(null);
  const [defaultShout, setDefaultShout] = useRecoilState(defaultShoutState);

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
    const value = e.target.title.value;
    if (validateInput(value)) {
      setError('');
      onAdd(value, type);
      if (type === 'JustShout') setDefaultShout(value);
    }
  };

  const handleFormEditJustSay = (e) => {
    e.preventDefault();
    const value = e.target.title.value;
    if (validateInput(value)) {
      setError('');
      onEdit(listId, value, type);
      if (type === 'JustShout') setDefaultShout(value);
    }
  };

  let initialValue;
  if (type === 'JustShout') {
    initialValue = defaultShout;
  } else if (list) {
    initialValue = list.value;
  }

  let titleForm;
  if (!setting) {
    titleForm = addType ? 'Add ' + type : 'Edit ' + type;
  }

  return (
    <>
      <div className="text-xl mb-1">{titleForm}</div>
      <Form
        onSubmit={addType ? handleFormJustSay : handleFormEditJustSay}
        error={error}
        type={'text'}
        name={'title'}
        defaultValue={initialValue}
        disabled={disabled}
        title={title}
      />
    </>
  );
};
export default FormInputText;

import { useState } from 'react';
import GetJson from '../../helpers/getJsonFormat';
import Form from '../Form';
const FormJustSay = ({
  setListAllWidgets,
  setShowModalJustSay,
  listAllWidgets,
  addType = true,
  onSubmit = () => {},
}) => {
  const [error, setError] = useState(null);

  const handleFormJustSay = (e) => {
    e.preventDefault();
    const trim = e.target.title.value.trim().length;
    if (trim < 3) {
      setError('Please enter at least 3 characters.');
    } else {
      const getData = GetJson(listAllWidgets, e.target.title.value, 'justSay');
      setListAllWidgets([...listAllWidgets, getData]);
      setShowModalJustSay(false);
      setError('');
    }
  };
  const handleEditFormJustSay = (e) => {
    e.preventDefault();
  };

  return (
    <Form
      onSubmit={addType ? handleFormJustSay : handleEditFormJustSay}
      error={error}
      type={'text'}
      name={'title'}
    />
  );
};
export default FormJustSay;

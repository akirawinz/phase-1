import Form from '../Form';
import { useState } from 'react';
import GetJson from '../../helpers/getJsonFormat';

const FormCounter = ({
  getJson,
  setListAllWidgets,
  setShowModalCounter,
  listAllWidgets,
}) => {
  const [error, setError] = useState(null);
  const handleFormCounter = (e) => {
    e.preventDefault();
    if (e.target.num.value < 0) {
      setError('Please enter at least 0.');
    } else if (e.target.num.value == '') {
      setError('Please provide some value.');
    } else {
      setError('');
      const getData = GetJson(
        listAllWidgets,
        Number(e.target.num.value),
        'counter'
      );
      setListAllWidgets([...listAllWidgets, getData]);
      setShowModalCounter(false);
    }
  };

  return (
    <Form
      onSubmit={handleFormCounter}
      error={error}
      type={'number'}
      name={'num'}
      placeHolder={'initial number'}
    />
  );
};

export default FormCounter;

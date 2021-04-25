import Form from '../Form';
import { useState } from 'react';

const FormCounter = ({ onAdd }) => {
  const [error, setError] = useState(null);
  const handleFormCounter = (e) => {
    e.preventDefault();
    if (e.target.num.value < 0) {
      setError('Please enter at least 0.');
    } else if (e.target.num.value == '') {
      setError('Please provide some value.');
    } else {
      setError('');
      onAdd(Number(e.target.num.value), 'counter');
    }
  };

  return (
    <>
      <div className="text-xl mb-1">Add Counter</div>
      <Form
        onSubmit={handleFormCounter}
        error={error}
        type={'number'}
        name={'num'}
        placeHolder={'initial number'}
      />
    </>
  );
};

export default FormCounter;

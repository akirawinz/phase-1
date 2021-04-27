import { useState } from 'react';
import Button from '../Button';
import { useRecoilState } from 'recoil';
import { isCustomEditState } from '../States';
import { GiConsoleController } from 'react-icons/gi';

const FormCustom = ({
  addType,
  onEdit,
  onAdd,
  setting,
  list,
  onSubmit = () => {},
}) => {
  const [isCustom, setIsCustom] = useRecoilState(isCustomEditState);

  let titleForm;
  if (!setting) {
    titleForm = addType ? 'Add ' + '24 Games' : 'Edit ' + '24 Games';
  }

  let arr = [];

  const handleCustom = (e) => {
    e.preventDefault();
    const arr = getArr(e);
    onAdd(arr, 'Custom');
    setIsCustom(true);
  };

  const getArr = (e) => {
    const num1 = e.target.num1.value;
    const num2 = e.target.num2.value;
    const num3 = e.target.num3.value;
    const num4 = e.target.num4.value;
    return [num1, num2, num3, num4];
  };

  const handleEditCustom = (e) => {
    e.preventDefault();
    const arr = getArr(e);
    onEdit(list.id, arr, 'Custom');
  };

  return (
    <>
      <div className="text-xl mb-1">{titleForm}</div>
      <form
        className="flex"
        onSubmit={addType ? handleCustom : handleEditCustom}
      >
        <input
          type="number"
          name="num1"
          min="1"
          max="9"
          defaultValue={list ? list.value[0] : ''}
          className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
        />

        <input
          type="number"
          name="num2"
          min="1"
          max="9"
          defaultValue={list ? list.value[1] : ''}
          className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
        />
        <input
          type="number"
          name="num3"
          min="1"
          max="9"
          defaultValue={list ? list.value[2] : ''}
          className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
        />
        <input
          type="number"
          name="num4"
          min="1"
          max="9"
          defaultValue={list ? list.value[3] : ''}
          className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
        />
        <Button>Enter</Button>
      </form>
    </>
  );
};
export default FormCustom;

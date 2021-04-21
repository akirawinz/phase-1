import { IoClose } from 'react-icons/io5';
import { useState, useEffect } from 'react';
const Modal = ({ children, title, show = false, onCancel = () => {} }) => {
  const [showModal, setShowModal] = useState(show);
  useEffect(() => {
    setShowModal(show);
  }, [show]);

  return showModal ? (
    <div className="fixed flex items-center justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
      <div className="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full">
        <button
          className="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
          onClick={onCancel}
        >
          <IoClose />
        </button>
        <div className="text-xl">{title}</div>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;

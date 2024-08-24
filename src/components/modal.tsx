// components/Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './ui/button';

const Modal = ({ isOpen, onClose, details }: { isOpen: boolean, onClose: () => void, details: any }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <div className="mb-4 text-center">{details}</div>
        <div className="flex justify-center">
          <Button className="bg-slate-500">Reserva Ahora!</Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

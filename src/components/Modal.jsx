import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg shadow-2xl max-w-lg w-full mx-4 border border-gray-200 transform transition-all duration-300 scale-95 hover:scale-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto pr-4">
          <div className="text-gray-700 text-justify leading-relaxed">
            {children}
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
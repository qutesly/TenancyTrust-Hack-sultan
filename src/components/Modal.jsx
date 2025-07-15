import React from "react";

const Modal = ({
  className = "",
  isOpen,
  onClose,
  title,
  children,
  style = {},
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    // Only close if user clicks directly on the backdrop
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0  bg-black/0 z-50 flex items-center justify-center overflow-y-auto h-full"
      style={style}
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-white rounded-lg shadow-lg p-6 relative ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (Optional) */}
        {/* <button
          onClick={onClose}
          className={`absolute top-1 right-3 text-gray-500 hover:text-red-500 text-xl ${className}`}
        >
          &times;
        </button> */}

        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

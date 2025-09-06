import React from 'react';

export function Button({ children, onClick, type = 'button' }) {
  return (
    <button type={type} onClick={onClick} className="bg-black text-white rounded py-2 px-4 hover:bg-gray-800 transition">
      {children}
    </button>
  );
}

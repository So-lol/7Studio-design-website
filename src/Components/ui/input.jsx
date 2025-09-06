import React from 'react';

export function Input({ name, type = 'text', placeholder, value, onChange }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-1"
    />
  );
}

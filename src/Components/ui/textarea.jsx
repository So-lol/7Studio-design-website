import React from 'react';

export function Textarea({ name, placeholder, value, onChange, required }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      rows={5}
      className="border border-gray-300 rounded p-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-1"
    />
  );
}

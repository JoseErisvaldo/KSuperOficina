// src/Components/ui/container.js
import React from 'react';

export function Container({ children }) {
  return (
    <div className="w-full max-w-full md:max-w-[1600px] mx-auto my-4 md:my-6 p-4 md:p-6 border-2 rounded-lg h-auto md:h-[calc(95vh-100px)] overflow-auto bg-white shadow-md">
      {children}
    </div>
  );
}

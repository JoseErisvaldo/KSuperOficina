// src/components/CardNavigation.js
import React from 'react';

export function CardNavigation({ icon, text,onClick }) {
  return (
    <div 
      onClick={onClick}
      style={{ borderRight: '1px solid #c2c2c2c8',borderTop: '1px solid #c2c2c2c8' }} 
      className="flex items-center p-4 cursor-pointer hover:bg-blue-500 hover:text-white rounded">
      {icon}
      <span className="ml-2">{text}</span>
    </div>
  );
}

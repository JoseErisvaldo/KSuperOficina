// src/components/Navigation.js
import React from 'react';

export default function Navigation({ children }) {
  return (
    <div
      style={{ borderBottom: '1px solid #c2c2c2c8' }}
      className="flex gap-3 pt-3 mb-5 rounded"
    >
      {children}
    </div>
  );
}



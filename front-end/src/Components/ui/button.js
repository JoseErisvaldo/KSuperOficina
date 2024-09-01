import React from 'react';

export function Button({ children, className, onClick, variant, size }) {
  const baseStyle = 'px-4 py-2 rounded flex items-center justify-center gap-2';
  const variantStyle = variant === 'outline' ? 'border border-gray-400' : 'bg-blue-500 text-white';
  const sizeStyle = size === 'icon' ? 'p-2' : 'py-2 px-4';

  return (
    <button className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

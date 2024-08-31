import React from 'react';

export function ScrollArea({ children, className, style }) {
  return (
    <div className={`overflow-auto ${className}`} style={style}>
      {children}
    </div>
  );
}

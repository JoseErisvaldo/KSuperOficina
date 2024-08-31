import React, { useState } from 'react';

export function Dialog({ children }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {React.Children.map(children, child => {
        if (child.type === DialogTrigger) {
          return React.cloneElement(child, { onClick: handleOpen });
        }
        if (child.type === DialogContent) {
          return React.cloneElement(child, { open, onClose: handleClose });
        }
        return child;
      })}
    </>
  );
}

export function DialogTrigger({ asChild, onClick, children }) {
  return asChild
    ? React.cloneElement(children, { onClick })
    : <button onClick={onClick}>{children}</button>;
}
export function DialogContent({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 p-2 text-gray-700 hover:text-gray-900">
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ children }) {
  return <div className="text-lg font-bold">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h2 className="text-xl font-semibold">{children}</h2>;
}

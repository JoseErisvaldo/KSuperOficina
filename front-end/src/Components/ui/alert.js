

export default function Alert({ message, type }) {
  const alertClasses = {
    success: 'bg-green-100 text-green-700',
    error: 'bg-red-100 text-red-700',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-blue-100 text-blue-700',
  };
  return (
    <div className={`relative bottom-40 p-4 rounded-md ${alertClasses[type]}`}>
      <p>{message}</p>
    </div>
  );
}
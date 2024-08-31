export function Container({ children }) {
  return (
    <div className="w-full max-w-[1600px] mx-auto my-10 p-6 border-2 border-gray-300 rounded-lg h-[calc(100vh-100px)] overflow-auto">
      {children}
    </div>
  );
}

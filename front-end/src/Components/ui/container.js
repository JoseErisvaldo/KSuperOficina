

export function Container({ children }) {
  return (
    <div className=" w-full m-10 p-10 border-2 rounded h-[calc(100vh-100)]">
      {children}
    </div>
  );
}
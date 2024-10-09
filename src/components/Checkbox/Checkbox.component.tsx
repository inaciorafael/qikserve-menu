const Checkbox = () => {
  return (
    <button className="w-full flex flex-row items-center justify-between">
      <div className="flex flex-col items-start">
        <p className="text-title font-semibold">1 meat</p>
        <p className="text-subtitle">R$33,00</p>
      </div>

      <div className="h-6 w-6 rounded-full flex items-center justify-center bg-gray-500">
        <div className="h-4 w-4 border-white border-[0.2rem] rounded-full bg-gray-500"></div>
      </div>
    </button>
  );
};

export default Checkbox;

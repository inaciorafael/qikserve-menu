const MenuSection = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 border-b-[0.2rem] border-primary pb-5 items-center">
      <div className="p-[0.2rem] bg-primary rounded-full">
        <div className="p-[0.2rem] bg-white rounded-full">
          <img
            className="w-16 h-16 md:w-20 md:h-20 rounded-full"
            src="https://preodemo.gumlet.io/usr/venue/7602/section/646fbe4c64a6f.png"
          />
        </div>
      </div>
      <p className="font-semibold text-title text-xl">[[name]]</p>
    </div>
  );
};

export default MenuSection;

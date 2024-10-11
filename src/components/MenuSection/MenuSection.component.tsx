import { MenuSectionProps } from "./MenuSection.types";

const MenuSection = (props: MenuSectionProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`flex transition-all flex-col gap-4 md:gap-6 pb-4 items-center border-b-[0.2rem] ${props.isActive ? "border-primary" : "border-transparent"}`}
    >
      <div className="w-16 h-16 md:w-20 md:h-20">
        <img
          className={`w-16 h-16 p-[0.2rem] object-cover border-[0.2rem] md:w-20 md:h-20 rounded-full ${props.isActive ? "border-primary" : "border-transparent"}`}
          src={props.images[0].image}
        />
      </div>
      <p className="font-semibold text-title text-xl">{props.name}</p>
    </button>
  );
};

export default MenuSection;

import Icon from "../Icon";

const HeaderMobile = () => {
  return (
    <div className="bg-nav-background">
      <div className="flex p-4 flex-row items-center justify-between gap-5">
        <Icon.MenuBurger className="text-transparent text-xl" />
        <p className="text-background font-semibold">Menu</p>
        <Icon.MenuBurger className="text-background text-xl" />
      </div>
    </div>
  );
};

export default HeaderMobile;

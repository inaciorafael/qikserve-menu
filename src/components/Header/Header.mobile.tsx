import HeaderBanner from "../../assets/header-banner.png";

import Icon from "../Icon";

// TODO: Logica menu item ativo

const HeaderMobile = () => {
  return (
    <div className="bg-primary">
      <div className="flex p-4 bg-primary flex-row items-center justify-between gap-5">
        <Icon.MenuBurger className="text-transparent text-xl" />
        <p className="text-background font-semibold">Menu</p>
        <Icon.MenuBurger className="text-background text-xl" />
      </div>
    </div>
  );
};

export default HeaderMobile;

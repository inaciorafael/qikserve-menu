import HeaderBanner from "../../assets/header-banner.png";
import HeaderMenuItem from "../HeaderMenuItem";

// TODO: Logica menu item ativo

const HeaderDesktop = () => {
  return (
    <div className="bg-primary">
      <div className="flex sticky bg-primary top-0 flex-row items-center justify-center gap-5">
        <HeaderMenuItem title="menu" />
        <HeaderMenuItem title="entrar" />
        <HeaderMenuItem title="contato" />
      </div>
      <img src={HeaderBanner} className="w-full" />
    </div>
  );
};

export default HeaderDesktop;

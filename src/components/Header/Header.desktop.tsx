import HeaderBanner from "../../assets/header-banner.png";
import HeaderMenuItem from "../HeaderMenuItem";

// TODO: Logica menu item ativo

const HeaderDesktop = () => {
  return (
    <div className="bg-primary">
      <div className="flex bg-primary flex-row items-center justify-center gap-5">
        <HeaderMenuItem isActive title="menu" />
        <HeaderMenuItem title="entrar" />
        <HeaderMenuItem title="contato" />
      </div>
    </div>
  );
};

export default HeaderDesktop;

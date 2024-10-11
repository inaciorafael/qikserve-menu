import HeaderMenuItem from "../HeaderMenuItem";

const HeaderDesktop = () => {
  return (
    <div className="bg-nav-background">
      <div className="flex flex-row items-center justify-center gap-5">
        <HeaderMenuItem isActive title="menu" />
        <HeaderMenuItem title="entrar" />
        <HeaderMenuItem title="contato" />
      </div>
    </div>
  );
};

export default HeaderDesktop;

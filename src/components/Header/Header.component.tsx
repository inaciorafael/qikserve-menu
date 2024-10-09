import HeaderBanner from "../../assets/header-banner.png";

const Header = () => {
  return (
    <div className="bg-primary">
      <div className="flex flex-row items-center justify-center gap-5">
        <h1>MENU</h1>
        <h1>ENTRAR</h1>
        <h1>CONTATO</h1>
      </div>
      <img src={HeaderBanner} className="w-full" />
    </div>
  );
};

export default Header;

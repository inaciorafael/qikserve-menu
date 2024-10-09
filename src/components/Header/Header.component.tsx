import HeaderDesktop from "./Header.desktop";
import HeaderMobile from "./Header.mobile";

import { useResponsiveQueries } from "../../hooks";

const Header = () => {
  const { isMobile } = useResponsiveQueries();

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;

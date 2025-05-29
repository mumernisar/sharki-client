// src/layouts/Layout.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { activeNavMenu, animation, aTagClick, dataPoggress } from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import MobileHeader from "./MobileHeader";

const Layout = ({
  children,
  transparentTop,
  transparentHeader,
  topSecondaryBg,
  footerSolidBg,
}) => {
  const location = useLocation();

  useEffect(() => {
    activeNavMenu(location.pathname);
    animation();
    aTagClick();
    dataPoggress();
  }, [location.pathname]);

  return (
    <>
      <Header
        transparentTop={transparentTop}
        transparentHeader={transparentHeader}
        topSecondaryBg={topSecondaryBg}
      />
      <MobileHeader
        transparentTop={transparentTop}
        transparentHeader={transparentHeader}
        topSecondaryBg={topSecondaryBg}
      />
      {children}
      <Footer footerSolidBg={footerSolidBg} />
    </>
  );
};

export default Layout;

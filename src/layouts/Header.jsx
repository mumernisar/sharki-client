import { Link } from "react-router-dom";
import { useEffect } from "react";
import { stickyNav } from "../utils";
// import { Home, News, Pages, Project } from "./menus";
// import SignAction from "../components/SignAction";
import { useAppKitAccount } from "@reown/appkit/react";
import { useAppKit } from "@reown/appkit/react";
import { ProfileDropdown } from "../components/dropdown";

const Header = ({ transparentTop, transparentHeader, topSecondaryBg }) => {
  const { address, isConnected, caipAddress, status, embeddedWalletInfo } =
    useAppKitAccount();
  const { open, _ } = useAppKit();

  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  });
  useEffect(() => {
    console.log(
      address,
      isConnected,
      caipAddress,
      status,
      embeddedWalletInfo,
      "--- wallet info"
    );
  }, [address, caipAddress, embeddedWalletInfo, isConnected, status]);
  return (
    <header
      className={`site-header sticky-header d-none d-lg-block ${
        transparentTop ? "topbar-transparent" : ""
      } ${transparentHeader ? "transparent-header" : ""}`}
      id="header-sticky"
    >
      <div
        className={`header-topbar d-none d-sm-block ${
          topSecondaryBg ? "topbar-secondary-bg" : ""
        }`}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <ul className="contact-info">
                <li>
                  <a href="#">
                    <i className="far fa-envelope" /> Looking to hire me for
                    work? Reach out at
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i className="far fa-map-marker-alt" /> 250 Main Street, 2nd
                    Floor, USA
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="col-auto d-none d-md-block">
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-wrapper">
        <div className="container">
          <div className="navbar-inner">
            <div className="site-logo">
              <Link to="/">
                <img src="assets/img/logo.png" alt="Sharki" />
              </Link>
            </div>
            <div className="nav-menu" id="menu">
              <ul>
                <li>
                  <span style={{ visibility: "hidden" }}>Home</span>
                </li>
                {/* // to retain formatting */}

                {/* <li>
                  <a href="#">
                    Home
                    <span className="dd-trigger">
                      <i className="far fa-angle-down" />
                    </span>
                  </a>
                  <ul className="submenu">{Home}</ul>
                </li> */}
                {/* <li>
                  <a href="#">
                    Project
                    <span className="dd-trigger">
                      <i className="far fa-angle-down" />
                    </span>
                  </a>
                  <ul className="submenu">{Project}</ul>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <a href="#">
                    News
                    <span className="dd-trigger">
                      <i className="far fa-angle-down" />
                    </span>
                  </a>
                  <ul className="submenu">{News}</ul>
                </li>
                <li>
                  <a href="#">
                    Pages
                    <span className="dd-trigger">
                      <i className="far fa-angle-down" />
                    </span>
                  </a>
                  <ul className="submenu">{Pages}</ul>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li> */}
              </ul>
            </div>
            <div className="navbar-extra d-flex align-items-center">
              {/*  */}
              {/* {!isConnected ? (
                <SignAction />
              ) : (
                <Link
                  to="/signup"
                  className="main-btn nav-btn d-none d-sm-inline-block"
                >
                  Sign up <i className="far fa-arrow-right" />
                </Link>
              )} */}

              {/* <ProfileDropdown /> */}

              <div>
                {isConnected ? (
                  <ProfileDropdown />
                ) : status === "connecting" || status === "reconnecting" ? (
                  <span className="main-btn nav-btn d-none d-sm-inline-block opacity-50 cursor-not-allowed">
                    Connecting...
                  </span>
                ) : (
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      open({ view: "Connect" });
                    }}
                    className="main-btn nav-btn d-none d-sm-inline-block"
                  >
                    Connect Wallet <i className="far fa-arrow-right" />
                  </span>
                )}

                <a href="#" className="nav-toggler">
                  <span />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

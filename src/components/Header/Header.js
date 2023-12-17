import Navigation from "components/Navigation";
import MobileNavigation from "components/MobileNavigation";
import css from "./Header.module.css";
import InPowerLogo from "../icons/INpowerLogo.svg";
import mobileMenuIcon from "../icons/mobileMenuIcon.svg";
import { useState } from "react";

const Header = () => {
  const [mobileMenuIconOpen, setMobileMenuIconOpen] = useState(false);

  // const onHandleClickButton = (e) => {
  //   e.preventDefault();

  //   console.log("inside func");
  //   setMobileMenuIconOpen(true);
  //   console.log(mobileMenuIconOpen);
  // };

  return (
    <>
      <section
        className={
          mobileMenuIconOpen ? css.mobile_menu_visible : css.header_section
        }
      >
        <div className={css.header_thumb}>
          <img
            className={css.robotics_logo}
            alt="robotics-logo"
            src={InPowerLogo}
          />
          {/* <img
            alt="mobile menu"
            className={mobileMenuIconOpen ? css.mobileMenuIcon : css.hidden}
            src={mobileMenuIcon}
            onClick={onHandleClickButton}
          /> */}
          <img
            alt="mobile menu"
            className={css.mobileMenuIcon}
            src={mobileMenuIcon}
            onClick={() => setMobileMenuIconOpen(!mobileMenuIconOpen)}
          />
          <Navigation isOpen={mobileMenuIconOpen} />
          <div className={css.locale_thumb}>
            <p className={css.locale}>UA</p>
            <button className={css.header_register_btn}>Реєстрація</button>
          </div>
        </div>

        <MobileNavigation isOpen={mobileMenuIconOpen} />
      </section>
    </>
  );
};
export default Header;

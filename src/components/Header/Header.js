import Navigation from "components/Navigation";
import css from "./Header.module.css";
import InPowerLogo from "../icons/INpowerLogo.svg";
import mobileMenuIcon from "../icons/mobileMenuIcon.svg";
import { useState } from "react";

const Header = () => {
  const [mobileMenuIconOpen, setMobileMenuIconOpen] = useState(true);

  const onHandleClickButton = (e) => {
    e.preventDefault();

    console.log("inside func");
    setMobileMenuIconOpen(false);
    console.log(mobileMenuIconOpen);
  };

  return (
    <>
      <section className={css.header_section}>
        <div className={css.header_thumb}>
          <img
            className={css.robotics_logo}
            alt="robotics-logo"
            src={InPowerLogo}
          />
          <img
            alt="mobile menu"
            className={mobileMenuIconOpen ? css.mobileMenuIcon : css.hidden}
            src={mobileMenuIcon}
            onClick={onHandleClickButton}
          />
          {mobileMenuIconOpen ? (
            <div className={css.mobile_menu_thumb}>
              <Navigation />
              <div className={css.locale_thumb}>
                <p className={css.locale}>UA</p>
                <button className={css.header_register_btn}>Реєстрація</button>
              </div>
            </div>
          ) : (
            ""
          )}
          <Navigation />
          <div className={css.locale_thumb}>
            <p className={css.locale}>UA</p>
            <button className={css.header_register_btn}>Реєстрація</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;

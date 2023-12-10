import css from "./Footer.module.css";
import InPowerLogo from "../icons/INpowerLogo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className={css.footer}>
        <div className={css.footer_thumb}>
          <div className={css.footer_thumb}>
            <img
              className={css.footer_logo}
              alt="robotics-logo"
              src={InPowerLogo}
            />
          </div>
          <div>
            <NavLink to="/partnership" className={css.footer_link}>
              Партнерство
            </NavLink>
            <NavLink to="/contacts" className={css.footer_link}>
              Контакти
            </NavLink>
          </div>
        </div>
        <p className={css.copyright}>© 2023 Inpower</p>
      </footer>
    </>
  );
};
export default Footer;

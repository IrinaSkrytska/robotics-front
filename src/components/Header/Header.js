import Navigation from "components/Navigation";
import css from "./Header.module.css";
import InPowerLogo from "../icons/INpowerLogo.svg";

const Header = () => {
  return (
    <>
      <section className={css.header_section}>
        <div className={css.header_thumb}>
          <img alt="robotics-logo" src={InPowerLogo} />
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

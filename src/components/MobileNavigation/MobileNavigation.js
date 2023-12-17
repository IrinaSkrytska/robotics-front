import { NavLink } from "react-router-dom";
import css from "./MobileNavigation.module.css";

const MobileNavigation = ({ isOpen }) => {
  console.log("isOpenMobileNav", isOpen);
  return (
    <>
      <div className={isOpen ? css.mobile_nav : css.hidden}>
        {/* <NavLink to="/about" className={css.link}>
          Про Нас
        </NavLink> */}
        <NavLink
          to="/studies"
          className={(navData) =>
            navData.isActive ? css.activeLink : css.link
          }
        >
          Навчання
        </NavLink>
        <NavLink
          to="/gamification"
          className={(navData) =>
            navData.isActive ? css.activeLink : css.link
          }
        >
          Гейміфікація
        </NavLink>
        <NavLink
          to="/marketplace"
          className={(navData) =>
            navData.isActive ? css.activeLink : css.link
          }
        >
          Маркетплейс
        </NavLink>{" "}
        <div className={css.locale_thumb}>
          {" "}
          <button className={css.header_register_btn}>Реєстрація</button>
          <p className={css.locale}>UA</p>
        </div>
      </div>
    </>
  );
};
export default MobileNavigation;

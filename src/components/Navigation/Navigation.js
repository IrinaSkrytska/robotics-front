import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = ({ isOpen }) => {
  console.log("isOpenNav", isOpen);
  return (
    <>
      <nav className={css.desktop_nav}>
        <>
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
          </NavLink>
        </>

        {/* <NavLink to="/about" className={css.link}>
          Про Нас
        </NavLink> */}
      </nav>
    </>
  );
};
export default Navigation;

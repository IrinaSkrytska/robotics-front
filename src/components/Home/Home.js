import css from "./Home.module.css";
import ManInVRGlasses from "../images/man-in-vr-glasses.png";
import studyIcon from "../icons/study.svg";
import gamificationIcon from "../icons/gamification.svg";
import marketplaceIcon from "../icons/marketplace.svg";
import About from "components/About";
// import Reviews from "components/Reviews";
import Contacts from "components/Contacts";

const Home = () => {
  return (
    <>
      <section className={css.home_section}>
        <div className={css.home_hero_img_thumb}>
          <img
            className={css.home_hero_img}
            alt="man in vr glasses"
            src={ManInVRGlasses}
          />
        </div>
        <div className={css.hero_description_thumb}>
          <h1 className={css.hero_title}>Поринь у дивовижний світ</h1>
          <p className={css.hero_description}>
            Екосистема Mecha від InPower – це ваш крок у майбутнє освіти.
            Поєднуючи інновації та технології, ми створили унікальну систему, що
            включає навчання , гейміфікацію та торговельну платформу, задля
            цілісного розвитку освітнього процесу.
          </p>

          <button className={css.hero_description_btn}>Навчання</button>
        </div>
        <div>
          <ul className={css.hero_nav_list}>
            <li>
              <div>
                <img className={css.home_image} alt="studies" src={studyIcon} />
                <p className={css.hero_nav_title}>Навчання</p>
              </div>
            </li>
            <li>
              <div>
                <img
                  className={css.home_image}
                  alt="gamification"
                  src={gamificationIcon}
                />
                <p className={css.hero_nav_title}>Гейміфікація</p>
              </div>
            </li>
            <li>
              <div>
                <img
                  className={css.home_image}
                  alt="marketplace"
                  src={marketplaceIcon}
                />
                <p className={css.hero_nav_title}>Маркетплейс</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <About />
      {/* <Reviews /> */}
      <Contacts />
    </>
  );
};
export default Home;

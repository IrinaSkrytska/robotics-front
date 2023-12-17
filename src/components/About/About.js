import css from "./About.module.css";
import childInGlassesIcon from "../images/child_in_vr_glasses.jpg";
import chatBotIcon from "../icons/chat-bot.svg";
import gameIcon from "../icons/game.svg";
import girlWithPlaystation from "../images/girl_with_playstation.jpg";
import girlWithPlaystationTablet from "../images/girlWithPlaystationTablet.jpg";
import MarketplaceIconTablet from "../images/MarketplaceIconTablet.jpg";
import marketplacePeople from "../images/marketplacePeople.jpg";
import computerIcon from "../icons/computer.svg";
import tutorial from "../videos/tutorial.mp4";

const About = () => {
  return (
    <>
      <section className={css.about_section}>
        <div className={css.about_us_thumb}>
          <h2 className={css.about_us_text}>Про нас</h2>
          <p className={css.about_us_description}>
            Компанія InPower спеціалізується на розробці проектів різної
            складності, орієнтуючись на широкий спектр платформ. Ми працюємо над
            створенням унікальних рішень для десктопів, VR, мобільних пристроїв,
            веб-платформ, а також розширюємо нашу діяльність на ринок консольних
            ігор, включаючи системи, як-то PlayStation та інші.
          </p>
          <p className={css.about_us_description}>
            Наша місія - створити віртуальну школу з курсами з робототехніки,
            фізики, математики та інших дисциплін. Ми прагнемо до надання
            якісної автономної освіти, інтегруючи гейміфікацію для підвищення
            мотивації. Наші образовательні набори на MechaMarketplace дозволяють
            практично застосувати знання. Наша команда - це група однодумців,
            вмотивованих на створення інноваційного освітнього майбутнього.
          </p>
        </div>
        <div className={css.study_thumb}>
          {/* <img
            className={css.about_image}
            src={tutorial}
            alt="child in vr glasses"
          /> */}
          <video
            className={css.about_image_first}
            controls
            poster={childInGlassesIcon}
            src={tutorial}
            width="340px"
            height="280px"
          ></video>
          <div>
            <div className={css.study_title_thumb}>
              <img src={chatBotIcon} alt="chat-bot" />
              <p className={css.study_title}>Навчання</p>
            </div>
            <p className={css.study_description}>
              MechaLearn - це система навчання побудована на інтуїтивно
              зрозумілих і інтерактивних методиках. Вона включає в себе крок за
              кроком інструкції для вивчення основ та принципів роботи з
              Arduino, електронікою та програмуванням.
            </p>
            <p className={css.study_description}>
              Учні можуть практикуватися у віртуальному середовищі, повторюючи
              та поглиблюючи знання в будь-який час, що забезпечує ефективне та
              глибоке розуміння матеріалу.
            </p>
            <button className={css.about_try_btn}>
              Спробувати демонстрацію
            </button>

            <button className={css.about_details_btn}>Детальніше</button>
          </div>
        </div>
        <div className={css.study_thumb}>
          <img
            className={css.about_image_mobile}
            src={girlWithPlaystation}
            alt="girl with playstation"
          />
          <img
            className={css.about_image_tablet}
            src={girlWithPlaystationTablet}
            alt="girl with playstation"
          />
          <div>
            <div className={css.study_title_thumb}>
              <img src={gameIcon} alt="game-icon" />
              <p className={css.study_title}>Гейміфікація</p>
            </div>
            <p className={css.study_description}>
              MechaPulse - це гейміфікована платформа, яка була представлена на
              GameGathering в Києві. Ця пісочниця дозволяє гравцям створювати
              власні пристрої на основі схем, отриманих як бонус після обучення
              в системі MechaLearn або розроблених самостійно.  Гравці можуть
              використовувати ці пристрої у многопользовательских боях,
              демонструючи свої навички та творчість.
            </p>

            <button className={css.about_try_btn}>
              Спробувати демонстрацію
            </button>

            <button className={css.about_details_btn}>Детальніше</button>
          </div>
          <img
            className={css.about_image_right}
            src={girlWithPlaystation}
            alt="girl with playstation"
          />
        </div>
        <div className={css.study_thumb}>
          <img
            className={css.about_image}
            src={marketplacePeople}
            alt="people in marketplace"
          />
          <img
            className={css.about_image_tablet}
            src={MarketplaceIconTablet}
            alt="girl with playstation"
          />
          <div>
            <div className={css.study_title_thumb}>
              <img src={computerIcon} alt="computer" />
              <p className={css.study_title}>Маркетплейс</p>
            </div>
            <p className={css.study_description}>
              Mecha Marketplace - це місце, де можна купити або продати
              обладнання для робототехніки, електроніки, біології, хімії та
              інших наук. Тут можна знайти не тільки спеціальні датчики та
              набори для освітніх проектів, але й товари для дому та умного
              будинку. Від лабораторного устаткування до гаджетів для
              автоматизації будинку - Mecha Marketplace пропонує різноманітний
              вибір продукції за доступними цінами.
            </p>
            <div className={css.buttons_thumb}>
              <button className={css.about_try_btn}>
                Спробувати демонстрацію
              </button>
              <button className={css.about_details_btn}>Детальніше</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;

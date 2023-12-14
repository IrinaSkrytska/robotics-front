import css from "./Contacts.module.css";
import TelegramIcon from "../icons/Telegram.svg";
import MailIcon from "../icons/Mail.svg";

const Contacts = () => {
  return (
    <>
      <div className={css.contacts_thumb}>
        <div>
          <p className={css.contacts_title}> Контакти</p>
          <p className={css.contacts_sub_title}>Екосистема цифрових товарів</p>
        </div>
        <div>
          <p className={css.contacts_owner}>Vadym Khavronenko</p>
          <p className={css.contacts_owner_role}>Founder & CEO</p>
          <div className={css.contacts_icons_thumb}>
            <img
              className={css.contacts_telegram_icon}
              src={TelegramIcon}
              alt="telegram"
            />
            <img src={MailIcon} alt="mail" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Contacts;

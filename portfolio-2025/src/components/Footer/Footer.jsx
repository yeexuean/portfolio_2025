import { getImageUrl } from "../../utils";
import styles from "./Footer.module.css";
import PropTypes from "prop-types";

const ContactDetails = ({ iconPath, text }) => (
  <p className={styles.contactRow}>
    <img
      src={getImageUrl(iconPath)}
      alt=" "
      aria-hidden="true"
      className={styles.footerIcon}
    />
    <span className={styles.contactText}>{text}</span>
  </p>
);

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1>
        let&apos;s! <span>connect</span>
      </h1>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <h3>contact information</h3>
          <ContactDetails
            icon="footer/emailIcon.svg"
            text="yeexuean0502@gmail.com"
          />
          <ContactDetails icon="footer/phoneIcon.svg" text="+65 8891 0842" />
          <ContactDetails icon="footer/locationIcon.svg" text="singapore" />
        </div>

        <div className={styles.footerRight}>
          <form className={styles.footerForm}>
            <h3>send a message!</h3>
            <div className={styles.footerFormRow}>
              <h4>your name</h4>
              <input
                type="text"
                name="name"
                placeholder="your name..."
                required
              />
            </div>

            <div className={styles.footerFormRow}>
              <h4>your email</h4>
              <input
                type="email"
                name="email"
                placeholder="your email..."
                required
              />
            </div>

            <div className={styles.footerFormRow}>
              <h4>your message</h4>
              <textarea
                name="message"
                placeholder="hello, i'd like to talk about"
                rows="4"
                required
              />
            </div>

            <button type="submit">submit!</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

ContactDetails.propTypes = {
  iconPath: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

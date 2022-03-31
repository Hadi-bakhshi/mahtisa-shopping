import styles from "./footer.module.css";
import {
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsFillTelephoneFill,
  BsFillEnvelopeOpenFill,
  BsTelegram,
} from "react-icons/bs";
const FooterComponent = () => {
  return (
    <footer>
      <section className={styles.footerSection}>
        <div className={styles.socialMedia}>
          <div className={styles.socialMediaTitle}>
            <h3>Follow Us</h3>
          </div>
          <div className={styles.socialMediaIcons}>
            <a
              href="https://www.instagram.com/hadi_bakhshi27/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
            <a
              href="https://github.com/Hadi-bakhshi"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/hadi-bakhshi-aa203221b"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a href="https://t.me/haamim27" target="_blank" rel="noreferrer">
              <BsTelegram />
            </a>
            <a href="mailto:hadibakhshi277@gmail.com">
              <BsFillEnvelopeOpenFill />
            </a>
            <a href="tel:+989301377887">
              <BsFillTelephoneFill />
            </a>
          </div>
        </div>
      </section>
      <section className={styles.copyrightSection}>
        <div className={styles.copyright}>
          <p> Copyright © 2022 Hadi Bakhshi. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
};

export default FooterComponent;

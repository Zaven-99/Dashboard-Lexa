import { FaHeart } from "react-icons/fa";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            © 2026 Lexa - Crafted with <FaHeart size={10} color="red" /> by
            Themesbrand.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

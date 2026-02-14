import styles from "./authLogo.module.scss";
import logoLightTheme from "../../../assets/logo/logoLightTheme.png";

const AuthLogo = () => {
  return (
    <div>
      <h3 className={styles.logo}>
        <a href="/dashboard">
          <img src={logoLightTheme} alt="logo" />
        </a>
      </h3>
    </div>
  );
};

export default AuthLogo;

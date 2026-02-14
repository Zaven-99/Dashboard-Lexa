import { FaCog } from "react-icons/fa";
import { useDrpoDown } from "../../../hooks/useDrpoDown";
import { GiHamburgerMenu } from "react-icons/gi";

import DropDownMenu from "../../dropDownMenu/DropDownMenu";

import styles from "./navbarHeader.module.scss";

import logoMobile from "../../../assets/logo/logoMobile.png";
import logoDarkTheme from "../../../assets/logo/logoDarkTheme.png";
import logoLightTheme from "../../../assets/logo/logoLightTheme.png";

interface NavbarHeaderProps {
  theme: string;
  sideBarToggle: () => void;
  toggleBurger: () => void;
}

const NavbarHeader = ({
  theme,
  sideBarToggle,
  toggleBurger,
}: NavbarHeaderProps) => {
  const user = localStorage.getItem("user");
  const userData = user ? JSON.parse(user) : null;

  const { isDrpoDown, isClosing, toggleDropDownMenu } = useDrpoDown();
  return (
    <div className={styles["header-container"]}>
      <div className={styles["float-start"]}>
        <img
          className={styles.logo}
          src={theme === "dark" ? logoDarkTheme : logoLightTheme}
          alt=""
        />
        <img className={styles["logo-mobile"]} src={logoMobile} alt="" />
        <div className={styles["burger"]}>
          <GiHamburgerMenu size={22} onClick={toggleBurger} />
        </div>
      </div>

      <div className={styles["float-end"]}>
        <div className={styles.user}>
          {userData?.avatar && (
            <img
              className={styles.avatar}
              src={userData.avatar}
              alt={userData.username || "user"}
              onClick={toggleDropDownMenu}
            />
          )}{" "}
          {isDrpoDown && (
            <DropDownMenu
              className={`${styles["dropDown-menu"]} ${isClosing ? styles.closing : ""}`}
            />
          )}
        </div>
        <FaCog
          size={20}
          className={styles["settings-icon"]}
          onClick={sideBarToggle}
        />
      </div>
    </div>
  );
};

export default NavbarHeader;

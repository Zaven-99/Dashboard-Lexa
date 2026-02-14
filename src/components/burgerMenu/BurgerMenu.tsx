import { navigation } from "../../mockData/mockData";
import { NavLink } from "react-router-dom";

import styles from "./burgerMenu.module.scss";

const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
  return isActive ? styles.active : styles["nav-item"];
};

interface BurgerMenuProps {
  isClosing: boolean;
}

const BurgerMenu = ({ isClosing }: BurgerMenuProps) => {
  return (
    <div
      className={`${styles["burger-menu"]} ${isClosing ? styles.closing : ""}`}
    >
      <ul className={styles["links"]}>
        {navigation.map((item) => {
          const Icon = item.img;

          return (
            <li key={item.id}>
              <NavLink to={item.link} className={getNavLinkClass}>
                {Icon && <Icon />}
                <p>{item.title}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BurgerMenu;

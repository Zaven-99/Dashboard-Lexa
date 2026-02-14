import { useHeader } from "../../bll/useHeader";

import BurgerMenu from "../UI/burgerMenu/BurgerMenu";
import NavbarHeader from "./navbarHeader/NavbarHeader";
import Navigation from "./navigation/Navigation";

import styles from "./header.module.scss";

interface HeaderProps {
  theme: string;
  sideBarToggle: () => void;
}

const Header = ({ theme, sideBarToggle }: HeaderProps) => {
  const { toggleBurger, isOpenBurger, isClosing } = useHeader();
  return (
    <header>
      <div className={styles["top-bar"]}>
        <NavbarHeader
          theme={theme}
          sideBarToggle={sideBarToggle}
          toggleBurger={toggleBurger}
        />
        <Navigation />
        {isOpenBurger && <BurgerMenu isClosing={isClosing} />}
      </div>
    </header>
  );
};

export default Header;

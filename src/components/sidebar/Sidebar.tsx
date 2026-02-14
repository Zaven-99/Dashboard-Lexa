import { MdClose } from "react-icons/md";

import styles from "./sideBar.module.scss";

interface SidebarProps {
  theme: string;
  isClosing: boolean;
  toggletheme: (mode: "light" | "dark") => void;
  closeSideBar?: () => void;
}
const Sidebar = ({
  theme,
  toggletheme,
  isClosing,
  closeSideBar,
}: SidebarProps) => {
  return (
    <aside
      className={`${styles["side-bar"]} ${isClosing ? styles.closing : ""}`}
    >
      <div className={styles["flex-container"]}>
        <h5 className={styles["side-bar__title"]}>Settings</h5>
        <div className={styles["close-icon__bg"]}>
          <MdClose
            size={15}
            color={"#fff"}
            className={styles["close-icon"]}
            onClick={closeSideBar}
          />
        </div>
      </div>
      <hr />

      <div className={styles["radio-toolbar"]}>
        <span className={styles.mode}>Mode</span>

        <input
          type="radio"
          id="radioLight"
          name="mode"
          value="light"
          checked={theme === "light"}
          onChange={() => toggletheme("light")}
        />
        <label htmlFor="radioLight">Light</label>

        <input
          type="radio"
          id="radioDark"
          name="mode"
          value="dark"
          checked={theme === "dark"}
          onChange={() => toggletheme("dark")}
        />
        <label htmlFor="radioDark">Dark</label>
      </div>
    </aside>
  );
};

export default Sidebar;

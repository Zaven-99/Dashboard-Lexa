import {
  FiUser,
  FiCreditCard,
  FiSettings,
  FiLock,
  FiLogOut,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../bll/useAuth";
import styles from "./DropDownMenu.module.scss";

interface DropDownMenuProps {
  className: string;
}

const DropDownMenu = ({ className }: DropDownMenuProps) => {
  const { handleLogout } = useAuth();

  return (
    <div className={className}>
      <ul>
        <li className={styles["dropDown-item"]}>
          <NavLink to="#">
            <FiUser /> Profile
          </NavLink>
        </li>
        <li className={styles["dropDown-item"]}>
          <NavLink to="#">
            <FiCreditCard /> My Wallet
          </NavLink>
        </li>
        <li className={styles["dropDown-item"]}>
          <NavLink to="#">
            <FiSettings /> Settings
          </NavLink>
        </li>
        <li className={styles["dropDown-item"]}>
          <NavLink to="#">
            <FiLock /> Lock Screen
          </NavLink>
        </li>
        <li className={styles["dropDown-item"]} onClick={handleLogout}>
          <FiLogOut /> Log Out
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;

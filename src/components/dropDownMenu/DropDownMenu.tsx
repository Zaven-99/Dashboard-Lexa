import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from "./DropDownMenu.module.scss";
import { dropDownLinks } from "../../mockData/mockData";

interface DropDownMenuProps {
  className: string;
}

const DropDownMenu = ({ className }: DropDownMenuProps) => {
  const { handleLogout } = useAuth();

  return (
    <div className={className}>
      <ul>
        {dropDownLinks.map((item) => {
          const Icon = item.icon;
          const isLogout = item.action === "logout";

          return (
            <li
              key={item.id}
              className={styles["dropDown-item"]}
              onClick={isLogout ? handleLogout : undefined}
              style={isLogout ? { cursor: "pointer" } : {}}
            >
              {item.path && !isLogout ? (
                <NavLink to={item.path}>
                  <Icon /> {item.name}
                </NavLink>
              ) : (
                <>
                  <Icon /> {item.name}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDownMenu;

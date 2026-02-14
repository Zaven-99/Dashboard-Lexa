import { useLocation } from "react-router-dom";
import styles from "../components/header/navigation/navigation.module.scss";
export const useNavigation = () => {
  const location = useLocation();

  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  const currentPage = pathSegments[pathSegments.length - 1] || "Dashboard";
  const formattedPageName =
    currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return isActive ? styles.active : styles["nav-item"];
  };
  return {
    formattedPageName,
    getNavLinkClass,
    pathSegments,
  };
};

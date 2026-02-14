import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { navigation } from "../../../mockData/mockData";
import { MiniBarChart } from "../../minicharts/MiniCharts";
import { useNavigation } from "../../../hooks/useNavigation";

import styles from "./navigation.module.scss";

const Navigation = () => {
  const { formattedPageName, getNavLinkClass, pathSegments } = useNavigation();
  return (
    <div className={styles.navigation}>
      <div className={styles["page-title__content"]}>
        <div className={styles["content-container"]}>
          <div className={styles.row}>
            <div className={styles["col-1"]}>
              <div className={styles["page-title__box"]}>
                <h4 className={styles["page-name"]}>{formattedPageName}</h4>
                <ol className={styles.breadcrumb}>
                  <li className={styles.breadcrumbItem}>
                    <NavLink className={styles.link} to="/">
                      Lexa
                    </NavLink>
                    <IoIosArrowForward className={styles.separator} />
                  </li>

                  {pathSegments.map((segment, index) => {
                    const url =
                      "/" + pathSegments.slice(0, index + 1).join("/");
                    const formattedSegment =
                      segment.charAt(0).toUpperCase() + segment.slice(1);
                    const isLast = index === pathSegments.length - 1;

                    return (
                      <li key={url} className={styles.breadcrumbItem}>
                        {isLast ? (
                          <span>{formattedSegment}</span>
                        ) : (
                          <>
                            <NavLink to={url}>{formattedSegment}</NavLink>
                            <IoIosArrowForward className={styles.separator} />
                          </>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
            <div className={styles["col-2"]}>
              <div className={styles["state-information"]}></div>
            </div>
          </div>
        </div>
        <div className={styles["mini-charts"]}>
          <MiniBarChart label="Balance $ 2,317" fill="#4fd1ff" />
          <MiniBarChart label="Item Sold 1230" fill="#7a6fbe" />
        </div>
      </div>
      <div className={styles["container-fluid"]}>
        <div className={styles.topnav}>
          <nav className={styles["navbar"]}>
            <div className={styles["navbar-collapse"]}>
              <ul className={styles["navbar-nav"]}>
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
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

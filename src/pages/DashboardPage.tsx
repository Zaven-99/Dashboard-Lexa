import { usePageTitle } from "../bll/usePageTitle";
import { useSideBar } from "../bll/useSideBar";
import { useTheme } from "../bll/useTheme";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MainPge from "../components/main/Main";
import Sidebar from "../components/sidebar/Sidebar";

const DashboardPage = () => {
  const { openSideBar, sideBarToggle, isClosing, closeSideBar } = useSideBar();

  const { theme, toggletheme } = useTheme();

  usePageTitle("Dashboard | Lexa");
  return (
    <div>
      <Header sideBarToggle={sideBarToggle} theme={theme} />
      {openSideBar && (
        <>
          <div className={"side-bar__overlay"} onClick={sideBarToggle} />
          <Sidebar
            theme={theme}
            toggletheme={toggletheme}
            isClosing={isClosing}
            closeSideBar={closeSideBar}
          />
        </>
      )}
      <MainPge />
      <Footer />
    </div>
  );
};

export default DashboardPage;

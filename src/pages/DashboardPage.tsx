import { usePageTitle } from "../hooks/usePageTitle";
import { useSideBar } from "../hooks/useSideBar";
import { useTheme } from "../hooks/useTheme";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
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
      <Main />
      <Footer />
    </div>
  );
};

export default DashboardPage;

import { usePageTitle } from "../bll/usePageTitle";
import Auth from "../components/auth/Auth";

const AuthPage = () => {
  usePageTitle("Login | Lexa");
  return (
    <>
      <Auth />
    </>
  );
};

export default AuthPage;

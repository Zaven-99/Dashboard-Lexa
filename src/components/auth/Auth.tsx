import { useAuth } from "../../hooks/useAuth";

import AuthReset from "./authReset/AuthReset";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";

import styles from "./auth.module.scss";

const Auth = () => {
  const { formType, toggleSwitch, handleLogin, error } = useAuth();

  return (
    <div className={styles.auth}>
      {formType === "signup" && <SignUp toggleSwitch={toggleSwitch} />}

      {formType === "signin" && (
        <SignIn
          toggleSwitch={toggleSwitch}
          handleLogin={handleLogin}
          error={error}
        />
      )}

      {formType === "forgot" && <AuthReset toggleSwitch={toggleSwitch} />}
    </div>
  );
};

export default Auth;

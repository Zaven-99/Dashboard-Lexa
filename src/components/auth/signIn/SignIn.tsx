import type { IFormValues } from "../../../types/types";
import { FaLock, FaGoogle } from "react-icons/fa";

import Input from "../../input/Input";
import Button from "../../button/Button";
import AuthLogo from "../authLogo/AuthLogo";

import styles from "./signIn.module.scss";

import { useSignin } from "../../../hooks/useSignin";
import AuthFooter from "../authFooter/AuthFooter";
import Form from "../form/Form";

interface SignInProps {
  toggleSwitch: (formType: string) => void;
  handleLogin: (data: IFormValues, reset: () => void) => void;
  error?: string;
}

const SignIn = ({ toggleSwitch, handleLogin, error }: SignInProps) => {
  const { register, handleSubmit, errors, onSubmit } = useSignin(handleLogin);
  return (
    <div className={styles.signin}>
      <div className={styles["signin-container"]}>
        <div className={styles["signin-container__inner"]}>
          <AuthLogo />
          <h4 className={styles["auth-title"]}>Welcome Back !</h4>
          <p className={styles["auth-subtitle"]}>
            Sign in to continue to Lexa.
          </p>

          <Form onSubmit={handleSubmit(onSubmit)}>
            {error && <p className={styles.error}>{error}</p>}
            <label className={styles["form-label"]} htmlFor="username">
              Email
            </label>
            <Input
              label="Email"
              placeholder="Enter e-mail"
              type="email"
              className={`${styles["form-control"]} ${errors.email ? styles.invalidBorder : ""}`}
              {...register("email", {
                required: "Please Enter Your Email",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid",
                },
              })}
              error={errors.email}
            />
            <label className={styles["form-label"]} htmlFor="">
              Password
            </label>
            <Input
              label="Password"
              placeholder="Enter password"
              type="password"
              className={`${styles["form-control"]} ${errors.password ? styles.invalidBorder : ""}`}
              {...register("password", {
                required: "Please Enter Your Password",
              })}
              error={errors.password}
            />

            <div className={styles["form-actions"]}>
              <div className={styles["form-check"]}>
                <input
                  className={styles["form-check__input"]}
                  type="checkbox"
                />
                <label
                  className={styles["form-check__label"]}
                  htmlFor="customControlInline"
                >
                  Remember me
                </label>
              </div>

              <Button
                type="submit"
                className={styles["submit-button"]}
                label="Log in"
              />
            </div>
          </Form>

          <div className={styles["forgot-password"]}>
            <FaLock size={10} color="#adb5bdbf" />
            <span onClick={() => toggleSwitch("forgot")}>
              forgot your password ?
            </span>
          </div>

          <div className={styles["social-icon"]}>
            <FaGoogle color="white" size={13} />
          </div>
        </div>
      </div>

      <AuthFooter
        text="Don't have an account ?"
        link="Signup Now"
        toggleSwitch={toggleSwitch}
        arg="signup"
      />
    </div>
  );
};

export default SignIn;

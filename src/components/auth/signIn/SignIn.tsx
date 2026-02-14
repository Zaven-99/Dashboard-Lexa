import type { IFormValues } from "../../../types/types";
import { FaHeart, FaLock, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";

import styles from "./signIn.module.scss";

import logoLightTheme from "../../../assets/logo/logoLightTheme.png";

interface SignInProps {
  toggleSwitch: (formType: string) => void;
  handleLogin: (data: IFormValues, reset: () => void) => void;
  error?: string;
}

const SignIn = ({ toggleSwitch, handleLogin, error }: SignInProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    handleLogin(data, reset);
  };

  return (
    <div className={styles.signin}>
      <div className={styles["signin-container"]}>
        <div className={styles["signin-container__inner"]}>
          <h3 className={styles.logo}>
            <a href="">
              <img src={logoLightTheme} alt="logo" />
            </a>
          </h3>
          <h4 className={styles["auth-title"]}>Welcome Back !</h4>
          <p className={styles["auth-subtitle"]}>
            Sign in to continue to Lexa.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
          </form>

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

      <div className={styles["auth-footer"]}>
        <p className={styles["auth-footer__text"]}>
          Don't have an account ?{" "}
          <span
            className={styles["auth-footer__link"]}
            onClick={() => toggleSwitch("signup")}
          >
            Signup Now
          </span>
        </p>
        <p className={styles["auth-footer__copyright"]}>
          © 2026 Lexa - Crafted with <FaHeart size={10} color="red" /> by
          Themesbrand.
        </p>
      </div>
    </div>
  );
};

export default SignIn;

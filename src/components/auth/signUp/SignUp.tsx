import type { IFormValues } from "../../../types/types";
import { FaHeart } from "react-icons/fa";
import { useForm } from "react-hook-form";

import Input from "../../UI/input/Input";
import logoLightTheme from "../../../assets/logo/logoLightTheme.png";
import Button from "../../UI/button/Button";

import styles from "./signUp.module.scss";

interface SignUpProps {
  toggleSwitch: (formType: string) => void;
}

const SignUp = ({ toggleSwitch }: SignUpProps) => {
  const {
    register,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  return (
    <div className={styles["signUp"]}>
      <div className={styles["signUp-container"]}>
        <div className={styles["signUp-container_inner"]}>
          <h3 className={styles.logo}>
            <a href="">
              <img src={logoLightTheme} alt="logo" />
            </a>
          </h3>
          <h4 className={styles["auth-title"]}>Free Register</h4>
          <p className={styles["auth-subtitle"]}>
            Get your free Lexa account now.
          </p>

          <form className={styles.form}>
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
              Username
            </label>
            <Input
              label="username"
              placeholder="Enter User name"
              type="text"
              className={`${styles["form-control"]} ${errors.username ? styles.invalidBorder : ""}`}
              {...register("username", {
                required: "Please Enter Your User name",
                minLength: {
                  value: 5,
                  message: "Username must be at least 5 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Username cannot exceed 20 characters",
                },
              })}
              error={errors.username}
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
            <div className={styles["btn-wrapper"]}>
              <Button
                type="submit"
                className={styles["submit-button"]}
                label="Register"
              />
            </div>
            <div className={styles.termsAgreement}>
              <p>
                By registering you agree to the Lexa <span>Terms of Use</span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className={styles["auth-footer"]}>
        <p className={styles["auth-footer__text"]}>
          Already have an account ?{" "}
          <span
            className={styles["auth-footer__link"]}
            onClick={() => toggleSwitch("signin")}
          >
            Login
          </span>
        </p>
        <p className={styles["auth-footer__copyright"]}>
          © Lexa - Crafted with <FaHeart size={10} color="red" /> by
          Themesbrand.
        </p>
      </div>
    </div>
  );
};

export default SignUp;

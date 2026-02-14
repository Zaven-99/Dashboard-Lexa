import { useForm } from "react-hook-form";
import { FaHeart } from "react-icons/fa";
import type { IFormValues } from "../../../types/types";

import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";

import styles from "./AuthReset.module.scss";

import logoLightTheme from "../../../assets/logo/logoLightTheme.png";

interface AuthResetProps {
  toggleSwitch: (formType: string) => void;
}

const AuthReset = ({ toggleSwitch }: AuthResetProps) => {
  const {
    register,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      email: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  return (
    <div className={styles["authReset"]}>
      <div className={styles["authReset-container"]}>
        <div className={styles["authReset-container__inner"]}>
          <h3 className={styles.logo}>
            <a href="">
              <img src={logoLightTheme} alt="logo" />
            </a>
          </h3>
          <h4 className={styles["auth-title"]}>Reset password</h4>
          <form action="">
            <label className={styles["form-label"]} htmlFor="email">
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
            <div className={styles["btn-wrapper"]}>
              <Button
                type="submit"
                className={styles["submit-button"]}
                label="Reset"
              />
            </div>
          </form>
        </div>
      </div>
      <div className={styles["auth-footer"]}>
        <p className={styles["auth-footer__text"]}>
          Remember it ?{" "}
          <span
            className={styles["auth-footer__link"]}
            onClick={() => toggleSwitch("signin")}
          >
            Sign in here
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

export default AuthReset;

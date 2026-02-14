import Input from "../../input/Input";
import Button from "../../button/Button";
import AuthLogo from "../authLogo/AuthLogo";

import styles from "./AuthReset.module.scss";

import { useAuthReset } from "../../../hooks/useAuthReset";
import AuthFooter from "../authFooter/AuthFooter";
import Form from "../form/Form";

interface AuthResetProps {
  toggleSwitch: (formType: string) => void;
}

const AuthReset = ({ toggleSwitch }: AuthResetProps) => {
  const { register, errors } = useAuthReset();
  return (
    <div className={styles["authReset"]}>
      <div className={styles["authReset-container"]}>
        <div className={styles["authReset-container__inner"]}>
          <AuthLogo />
          <h4 className={styles["auth-title"]}>Reset password</h4>
          <Form>
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
          </Form>
        </div>
      </div>

      <AuthFooter
        text="Remember it ?"
        link="Sign in here"
        toggleSwitch={toggleSwitch}
        arg="signin"
      />
    </div>
  );
};

export default AuthReset;

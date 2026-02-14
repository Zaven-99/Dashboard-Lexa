import { useSignUp } from "../../../hooks/useSignUp";
import Input from "../../input/Input";
import Button from "../../button/Button";
import AuthLogo from "../authLogo/AuthLogo";
import Form from "../form/Form";
import AuthFooter from "../authFooter/AuthFooter";

import styles from "./signUp.module.scss";

interface SignUpProps {
  toggleSwitch: (formType: string) => void;
}

const SignUp = ({ toggleSwitch }: SignUpProps) => {
  const { register, errors } = useSignUp();
  return (
    <div className={styles["signUp"]}>
      <div className={styles["signUp-container"]}>
        <div className={styles["signUp-container_inner"]}>
          <AuthLogo />
          <h4 className={styles["auth-title"]}>Free Register</h4>
          <p className={styles["auth-subtitle"]}>
            Get your free Lexa account now.
          </p>

          <Form>
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
          </Form>
        </div>
      </div>

      <AuthFooter
        text="Already have an account ?"
        link="Login"
        toggleSwitch={toggleSwitch}
        arg="signin"
      />
    </div>
  );
};

export default SignUp;

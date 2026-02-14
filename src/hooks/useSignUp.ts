import { useForm } from "react-hook-form";
import type { IFormValues } from "../types/types";

export const useSignUp = () => {
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
  return {
    register,
    errors,
  };
};

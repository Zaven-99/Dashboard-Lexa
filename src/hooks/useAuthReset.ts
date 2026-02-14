import type { IFormValues } from "../types/types";
import { useForm } from "react-hook-form";
export const useAuthReset = () => {
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
  return {
    register,
    errors,
  };
};

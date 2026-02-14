import { useEffect, useState } from "react";
import { user } from "../mockData/mockData";
import type { IFormValues, IUser } from "../types/types";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [formType, setFormType] = useState("signin");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedAuth = localStorage.getItem("isLoggedIn");
    if (savedAuth === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const navigate = useNavigate();

  const toggleSwitch = (formType: string) => {
    if (formType === "signin") {
      setFormType("signin");
    }
    if (formType === "signup") {
      setFormType("signup");
    }
    if (formType === "forgot") {
      setFormType("forgot");
    }
  };

  const handleLogin = (data: IFormValues, reset: () => void) => {
    try {
      const { email, password } = data;

      const users = user.find(
        (u: IUser) => u.email === email && u.password === password,
      );

      if (users) {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(users));
        navigate("/dashboard");
        setError("");
        reset();
      } else {
        setIsLoggedIn(false);
        setError("Invalid username or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setIsLoggedIn(false);
      setError("Something went wrong. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
  };

  return {
    toggleSwitch,
    handleLogin,
    formType,
    isLoggedIn,
    error,
    handleLogout,
  };
};

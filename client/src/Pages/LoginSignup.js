import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate ,Link} from "react-router-dom";
import { toast } from "react-toastify";

const LoginSignup = () => {

  const notifySuccess = (message) =>
    toast.success(message, {
      // Toast configuration for success
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = (errorMessage) =>
    toast.warn(errorMessage, {
      // Toast configuration for errors
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false); 
  const { signup, login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        try {
          setError("");
          setLoading(true);
          await login(formData.email, formData.password);
          console.log("Login successful");
          navigate("/men");
          notifySuccess('Login successful')
        } catch (error) {
          console.error("Failed to create an account:", error);
          setError("Failed to create an account");
        }
        setLoading(false);
      } else {
        // Call signup function
        if (formData.password !== formData.confirmPassword) {
          return setError("Passwords do not match");
        }
        try {
          setError("");
          setLoading(true);
          await signup(formData.email, formData.password);
          console.log("Signup successful");
          navigate("/men");
          notifySuccess('Signup successful')
        } catch (error) {
          console.error("Failed to create an account:", error);
          setError("Failed to create an account");
        }
        setLoading(false);
      }
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Authentication error:", error);
    }
    console.log("Form data:", formData);
  };

  return (
    <div className="flex justify-center items-center bg-primary/5 dark:bg-slate-900">
      <div className="w-full max-w-md">
        <h2 className="text-center text-primary text-2xl font-extrabold mb-4">{isLogin ? "Login" : "Signup"}</h2>
        <form
          onSubmit={handleSubmit}
          className="dark:bg-slate-900 border border-solid border-primary shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          {!isLogin && (
            <div className="mb-4">
            <label htmlFor="name" className="block text-primary text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          )
          }
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-primary text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded bg-slate-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-primary text-sm font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded bg-slate-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-primary text-sm font-bold mb-2"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded bg-slate-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          )}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-primary hover:underline"
            >
              {isLogin ? "Create an account" : "Already have an account?"}
            </button>
            <button
              disabled={loading}
              type="submit"
              className="bg-primary/85 hover:bg-primary/100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isLogin ? "Login" : "signup"}
            </button>
          </div>
          <div>
            <Link
              to="/forgot-password"
              onClick={() => setShowForgotPassword(!showForgotPassword)}
              className="text-sm text-primary hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
      </div>
    </div>
  );
};

export default LoginSignup;
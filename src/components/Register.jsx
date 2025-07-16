import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://web-production-f6fa0.up.railway.app/api/register/",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }
      );

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      console.log("User logged in:", user);
    } catch (error) {
      setError(
        error.response?.data?.message || "Login failed, please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col">
      <div className="text-center mb-4 mt-8 px-4">
        <h1 className="text-xl font-semibold">Sign-Up</h1>
      </div>
      <div className="border-t border-t-black/50 w-full h-[1px] mb-4" />

      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex items-center justify-center px-4"
      >
        <div className="w-[300px] text-center">
          <div className="flex flex-col  border border-black rounded-lg mb-2">
            <input
              type="text"
              name="text"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="First Name"
              className="outline-none p-2 bg-inherit text-[16px] font-normal"
            />
            <div className="border-t border-t-black/50 w-full h-[1px]" />
            <input
              type="password"
              name="password"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Last name"
              className="outline-none p-2 bg-inherit"
            />
          </div>
          <div className="flex flex-col  border border-black rounded-lg mb-2">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email/Phone number"
              className="outline-none p-2 bg-inherit text-[16px] font-normal"
            />
            <div className="border-t border-t-black/50 w-full h-[1px]" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
              className="outline-none p-2 bg-inherit"
            />
          </div>
          {error && <p className="text-red-500 text-xs my-2">{error}</p>}
          <div className="flex items-center justify-center gap-2">
            <p className="text-[12px]">Already have an account</p>{" "}
            <Link to={'/sign-in'} className="text-[#9747FF] font-semibold">Sign in</Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn w-full my-4 rounded-lg text-[15px] hover:bg-white hover:text-black hoverEffect"
          >
            {loading ? "Signin up..." : "Sign up"}
          </button>

          <div className="flex items-center justify-center gap-2">
            <div className="border-t border-t-black/50 w-full h-[1px]" />
            <p>or</p>
            <div className="border-t border-t-black/50 w-full h-[1px]" />
          </div>

          <button className="w-full flex items-center justify-center gap-2 my-4 py-2 rounded-lg text-[15px] border border-black">
            <img src="/google-icon.svg" alt="" />
            Continue with Google
          </button>

          <button className="w-full flex items-center justify-center gap-2 my-4 py-2 rounded-lg text-[15px] border border-black">
            <img src="/apple-icon.svg" alt="" />
            Continue with Apple
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

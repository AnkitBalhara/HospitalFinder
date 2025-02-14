import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SignupPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation function
  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Username is required";
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Invalid email address";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      signup(formData);
      navigate("/login"); // Redirect to login after signup
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-6 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.8)]">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight text-center">
          <span className="text-blue-500 shadow-lg border-b rounded-lg">
            MediCare
          </span>
        </h1>
        <h2 className="mt-5 text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 mt-10">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-900">
              Username
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              className="block w-full rounded-md px-3 py-1.5 text-base border border-gray-300 placeholder:text-gray-400 focus:border-blue-600 focus:ring-blue-600"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full rounded-md px-3 py-1.5 text-base border border-gray-300 placeholder:text-gray-400 focus:border-blue-600 focus:ring-blue-600"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full rounded-md px-3 py-1.5 text-base border border-gray-300 placeholder:text-gray-400 focus:border-blue-600 focus:ring-blue-600"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-blue-500 focus:ring-2 focus:ring-blue-600 cursor-pointer">
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{" "}
          <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-500">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
}

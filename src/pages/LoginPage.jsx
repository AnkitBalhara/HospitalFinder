import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  // State for form inputs
  const [formData, setFormData] = useState({ email: "", password: "" });

  // State for validation errors
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email & password match the stored signup data
    if (user && user.email === formData.email && user.password === formData.password) {
      login(formData); // Store the user session
      navigate("/maps"); // Redirect to maps page
    } else {
      setError("Invalid email or password.");
    }
  };

  // Google OAuth Success Handler
  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Successfully logged in", credentialResponse);
    login({ googleToken: credentialResponse.credential });
    navigate("/maps"); // Redirect to maps after login
  };

  // Google OAuth Error Handler
  const handleGoogleError = () => {
    console.log("Google Login failed");
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-6 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.8)]">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight text-center">
          <span className="text-blue-500 shadow-lg border-b rounded-lg">MediCare</span>
        </h1>
        <h2 className="mt-5 text-center text-2xl font-bold tracking-tight text-gray-900">
          Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-10">
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
              required
              className="block w-full rounded-md px-3 py-1.5 text-base border border-gray-300 placeholder:text-gray-400 focus:border-blue-600 focus:ring-blue-600"
            />
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
              required
              className="block w-full rounded-md px-3 py-1.5 text-base border border-gray-300 placeholder:text-gray-400 focus:border-blue-600 focus:ring-blue-600"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-blue-500 focus:ring-2 focus:ring-blue-600 cursor-pointer"
          >
            Sign in
          </button>
        </form>

        {/* Google Authentication */}
        <div className="mt-6 flex w-full justify-center">
          <GoogleOAuthProvider clientId="577703954361-c1shtitq9o97akbsk25vamb4retauqj8.apps.googleusercontent.com">
            <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
          </GoogleOAuthProvider>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-500">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}

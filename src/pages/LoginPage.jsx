import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    console.log("Successfully logged in", credentialResponse);
    login({ googleToken: credentialResponse.credential });
    navigate("/maps"); // Redirect to protected route after login
  };

  const handleError = () => {
    console.log("Login failed");
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
        Login
      </h2>

      <div className="mt-10">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
              />
            </div>
          </div>        

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 cursor-pointer"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Google Authentication Button */}
        <div className="mt-6 flex w-full justify-center">
          <div className="flex items-center space-x-2 rounded-md border border-gray-300 bg-white text-sm font-semibold text-gray-700 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 cursor-pointer">
            <GoogleOAuthProvider clientId="577703954361-c1shtitq9o97akbsk25vamb4retauqj8.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
              />
            </GoogleOAuthProvider>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to={"/signup"}
            className="font-semibold text-blue-600 hover:text-blue-500"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  </div>
   
  );
}

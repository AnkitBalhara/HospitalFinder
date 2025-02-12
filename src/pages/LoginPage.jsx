import { Link } from "react-router-dom";

export default function Example() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-6 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.8)]">
          <img
            alt="Your Company"
            src="https://media.licdn.com/dms/image/v2/D560BAQFqxQZhI3RrQQ/company-logo_200_200/company-logo_200_200/0/1724308896733/ast_consulting_india_logo?e=2147483647&v=beta&t=MeQjE0Vo7ATbQKu4Lo-9rytgW1vwwb4ZASl8Lr9s-Ak"
            className="mx-auto h-20 w-auto shadow-[0_0_10px_rgba(0,0,0,0.8)] rounded-lg border border-indigo-500"
          />
          <h2 className="mt-5 text-center text-2xl font-bold tracking-tight text-gray-900">
            Login
          </h2>

          <div className="mt-10">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
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
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              {/* Agree to Terms and Conditions */}
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the{" "}
                  <a href="#" className="text-indigo-600 hover:underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 cursor-pointer"
                >
                  Sign in
                </button>
              </div>
            </form>

            {/* Google Authentication Button */}
            <div className="mt-6">
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 cursor-pointer"
              >
                <img
                  src="https://static-00.iconduck.com/assets.00/google-icon-1024x1024-ilkrdfcp.png"
                  alt="Google logo"
                  className="h-5 w-5 mr-2 "
                />
                Sign in with Google
              </button>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <Link
                to={"/signup"}
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

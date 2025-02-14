import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 px-5 sm:px-10">
      {/* Right Side - Content Box */}
      <div className="relative flex w-full lg:w-1/2 h-auto lg:h-[90vh] shadow-lg rounded-2xl bg-white p-5 sm:p-10 flex-col justify-center text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
          Welcome to <span className="text-blue-500">MediCare</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
          Your health is our priority. Discover top-rated hospitals, book
          appointments, and get real-time updates on medical facilities near
          you.
        </p>

        {/* Features */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-center lg:justify-start space-x-3">
            <span className="text-blue-500 text-2xl">✔️</span>
            <p className="text-gray-700 text-base sm:text-lg">
              Find the nearest hospitals instantly
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-start space-x-3">
            <span className="text-blue-500 text-2xl">✔️</span>
            <p className="text-gray-700 text-base sm:text-lg">
              Book doctor appointments online
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-start space-x-3">
            <span className="text-blue-500 text-2xl">✔️</span>
            <p className="text-gray-700 text-base sm:text-lg">
              Get emergency medical assistance
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-6">
          <Link to={"/signup"}>
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition cursor-pointer">
            Get Started
          </button>
        </Link>
        </div>
      </div>

      {/* Left Side - Image */}
      <div
        className="w-full lg:w-1/2 h-[50vh] lg:h-[90vh] bg-cover bg-center rounded-2xl mt-5 lg:mt-0 lg:ml-5 shadow-lg"
        style={{
          backgroundImage:"url(public/Bg-image.webp)"
        }}
      />
    </div>
  );
};

export default Home;

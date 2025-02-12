import React from 'react';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-10">
      
      {/* Right Side - Content Box */}
      <div className="relative flex w-1/2 h-[90vh] shadow-lg rounded-2xl bg-white p-10 flex-col justify-center">
        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
          Welcome to <span className="text-blue-500">MediCare</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Your health is our priority. Discover top-rated hospitals, book appointments, and get real-time updates on medical facilities near you.
        </p>

        {/* Features */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-blue-500 text-2xl">✔️</span>
            <p className="text-gray-700 text-lg">Find the nearest hospitals instantly</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-blue-500 text-2xl">✔️</span>
            <p className="text-gray-700 text-lg">Book doctor appointments online</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-blue-500 text-2xl">✔️</span>
            <p className="text-gray-700 text-lg">Get emergency medical assistance</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-6">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Left Side - Image */}
      <div 
        className="w-1/2 h-[90vh] bg-cover bg-right rounded-2xl ml-5 shadow-lg"
        style={{
          backgroundImage: "url('https://cdni.iconscout.com/illustration/premium/thumb/girl-find-nearby-hospitals-using-map-illustration-download-in-svg-png-gif-file-formats--hospital-locator-medical-facilities-search-healthcare-mapping-finder-pack-illustrations-7492850.png')",
        }}
      />
    </div>
  );
};

export default Home;

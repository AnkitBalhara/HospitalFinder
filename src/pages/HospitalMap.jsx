import React, { useState, useEffect, useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%", // Full width responsiveness
  height: "70vh", // Adjust height based on screen
};

export default function HospitalMap() {
  const [userLocation, setUserLocation] = useState(null);
  const [hospitalLocation, setHospitalLocation] = useState(null);
  const [directions, setDirections] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userCoords);

          // Placeholder hospital location (Replace with actual API data)
          setHospitalLocation({
            lat: userCoords.lat + 0.01,
            lng: userCoords.lng + 0.01,
          });
        },
        (error) => console.error("Error getting location:", error)
      );
    }
  }, []);

  const onLoad = useCallback(
    (map) => {
      if (userLocation && hospitalLocation) {
        const bounds = new window.google.maps.LatLngBounds();
        bounds.extend(userLocation);
        bounds.extend(hospitalLocation);
        map.fitBounds(bounds);
      }
    },
    [userLocation, hospitalLocation]
  );

  const calculateDirections = () => {
    if (isLoaded && userLocation && hospitalLocation) {
      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route(
        {
          origin: userLocation,
          destination: hospitalLocation,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status.toLowerCase() === "ok") {
            setDirections(result);
          } else {
            console.error("Error fetching directions:", status);
          }
        }
      );
    }
  };

  useEffect(() => {
    if (isLoaded && userLocation && hospitalLocation) {
      calculateDirections();
    }
  }, [isLoaded, userLocation, hospitalLocation]);

  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-800">
        Nearby Hospitals
      </h1>

      {isLoaded && userLocation && hospitalLocation ? (
        <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-lg overflow-hidden shadow-lg">
          <GoogleMap
            mapContainerStyle={containerStyle}
            onLoad={onLoad}
            zoom={12}
            center={userLocation}
          >
            {/* User's Location Marker */}
            <MarkerF position={userLocation} label="You" />

            {/* Nearest Hospital Marker */}
            <MarkerF position={hospitalLocation} label="Hospital" />

            {/* Display Directions */}
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        </div>
      ) : (
        <p className="text-gray-500 text-center">Loading map...</p>
      )}
    </div>
  );
}

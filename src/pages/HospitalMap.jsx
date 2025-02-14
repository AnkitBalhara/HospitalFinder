import React, { useState, useEffect, useCallback } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "600px",
};

export default function HospitalMap() {
  const [userLocation, setUserLocation] = useState(null);
  const [hospitalLocation, setHospitalLocation] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCgmUq-apjxkIOuM1GkOU5nP18hNq5XVI0",
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
            lat: userCoords.lat + 0.01, // Adding offset for demo
            lng: userCoords.lng + 0.01,
          });
        },
        (error) => console.error("Error getting location:", error)
      );
    }
  }, []);

  const onLoad = useCallback((map) => {
    if (userLocation && hospitalLocation) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(userLocation);
      bounds.extend(hospitalLocation);
      map.fitBounds(bounds);
    }
  }, [userLocation, hospitalLocation]);

  return isLoaded && userLocation && hospitalLocation ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      onLoad={onLoad}
      zoom={14}
      center={userLocation} // Centering on the user
    >
      {/* User's Location Marker */}
      <MarkerF position={userLocation} label="You" />

      {/* Nearest Hospital Marker */}
      <MarkerF position={hospitalLocation} label="Hospital" />
    </GoogleMap>
  ) : (
    <p>Loading map...</p>
  );
}

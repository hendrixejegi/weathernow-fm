/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import getReverseLocation from "@/api/nominatim";

export function useLocation(options = {}) {
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const success = useCallback((pos) => {
    setPosition({ lat: pos.coords.latitude, lon: pos.coords.longitude });
    setError(null);
  }, []);

  const handleError = useCallback((err) => {
    setError({ code: err.code, message: err.message });
    setIsLoading(false);
  }, []);

  // Initial geolocation fetch
  useEffect(() => {
    if ("geolocation" in navigator) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(success, handleError, options);
    } else {
      setError({
        code: 0,
        message: "Geolocation is not supported by this browser",
      });
    }
  }, []);

  // Fetch address only for initial geolocation
  useEffect(() => {
    if (!position || !isInitialLoad) return;

    getReverseLocation(position.lat, position.lon)
      .then((res) => {
        setAddress(res);
      })
      .catch((err) => {
        setError({ code: "API_ERROR", message: "Failed to fetch address" });
        console.error("Reverse geocoding error:", err);
      })
      .finally(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
      });
  }, [position, isInitialLoad]);

  const updatePosition = useCallback((newPosition) => {
    setPosition(newPosition);
  }, []);

  const updateAddress = useCallback((newAddress) => {
    setAddress(newAddress);
  }, []);

  return {
    position,
    address,
    setPosition: updatePosition,
    setAddress: updateAddress,
    error,
    isLoading,
  };
}

import { createContext, useContext } from "react";

export const LocationContext = createContext(undefined);

export function useLocationContext() {
  const location = useContext(LocationContext);

  if (location === undefined) {
    throw new Error("useLocationContext must be used with a LocationContext");
  }

  return location;
}

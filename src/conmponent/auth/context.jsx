import React, { createContext, useContext, useState } from "react";
import {
  checkHasAuthToken,
  removeAuthToken,
  setAuthToken,
} from "../../Client/token-utils";

const AuthContext = createContext(undefined);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(checkHasAuthToken());

  const contextValue = {
    user,
    isAuthorized,
    authorize(data) {
      setUser(data.user);
      setIsAuthorized(true);
      setAuthToken(data.token);
    },
    unauthorize() {
      setUser(null);
      setIsAuthorized(false);
      removeAuthToken();
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};
export default UserContextProvider;

/* eslint-disable react/prop-types */
import React, { useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = React.createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}


export default UserContextProvider;

import React, { useState } from "react";

const initialState = {
    user: '',
    points: 0
}

export const AppContext = React.createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(initialState);
  
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}
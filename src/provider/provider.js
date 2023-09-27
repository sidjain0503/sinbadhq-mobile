"use client";
import { createContext, useState } from "react";

export const provider = createContext();

function Context({ children }) {

    const [money, setmoney] = useState("Incoming Payments");


  return (
    <provider.Provider
      value={{
       money,
       setmoney
      }}
    >
      {children}
    </provider.Provider>
  );
}

export default Context;

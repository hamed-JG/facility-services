import { createContext, useContext, useState } from "react";

const TitleContext = createContext();

export const TitleProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState(null);
  return (
    <TitleContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitle = () => useContext(TitleContext);

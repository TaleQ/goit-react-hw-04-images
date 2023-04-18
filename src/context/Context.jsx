import { createContext, useContext, useState } from "react";

const Context = createContext();
export const useCustomContext = () => useContext(Context);

export const ModalContext = ({ children }) => {
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [isShownModal, setIsShownModal] = useState(false);
  
  return (
    <Context.Provider value={{largeImageUrl, isShownModal, setLargeImageUrl, setIsShownModal}}>
      {children}
    </Context.Provider>
  );
}
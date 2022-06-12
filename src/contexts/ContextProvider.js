import React, { useContext, useState } from "react";
import { createContext } from "react";

const stateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setactiveMenu] = useState(true);
  const [currentColor, setCurrentColor] = useState('#1E4DB7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);

   const setMode = (e) => {
    setCurrentMode(e.target.value);
    setThemeSettings(false);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    setThemeSettings(false);
    localStorage.setItem('colorMode', color);
  };


  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
  return(
      <stateContext.Provider
      value={ { currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setactiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings } }
      >
          { children }
      </stateContext.Provider>
  )
};

export const useStateContext = () =>  useContext(stateContext);



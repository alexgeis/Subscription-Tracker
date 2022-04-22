import React, { useState, useContext } from 'react';

// Create our theme context using React.CreateContext()
export const ThemeContext = React.createContext();

// Create a custom hook that allows easy access to our ThemeContext values
export const useTheme = () => useContext(ThemeContext);
// Creating our theme provider. Accepts an argument of "props", here we plucking off the "children" object.
export default function ThemeProvider({ children }) {
  // Creating our state
const [darkTheme, setDarkTheme] = useState(true);

  // Method to update our state
const toggleTheme = () => {
    return setDarkTheme((prev) => !prev);
};


return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
    {children}
    </ThemeContext.Provider>
);
}



//LIGHT MODE

/* * {
    color: black;
} */

/* .container-fluid {
    padding-right: 50px;
    padding-left: 50px;
    padding-top: 30px;
    width: 80%;
    height: 850px;
    justify-content: center !important;
    background-image: url("https://i.pinimg.com/originals/43/bc/59/43bc5943d55fe07f5d5647ae9b3c8547.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    } */

    /* Button {
        background-color: #885A5A !important;
        border: 2px #885A5A !important;
        color: white !important;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; 
    } */


//DARK MODE
/* 
    * {
        color: white;
    }
    
    .container-fluid {
        padding-right: 50px;
        padding-left: 50px;
        padding-top: 30px;
        width: 80%;
        height: 850px;
        color: white !important;
        justify-content: center !important;
        background-image: url("https://st.hzcdn.com/simgs/b9d1be200dfd2fc7_4-4206/home-design.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
        border-radius: 10px;
        }

        Button {
            background-color: #427AA1 !important;
            border: 2px #885A5A !important;
            color: white !important;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; 
        } */
import { useState } from "react";
import { MovieContext, ThemeContext } from "./assets/context/index";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "./index.css";
import Page from "./Page";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Page />
        <ToastContainer />
      </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

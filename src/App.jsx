import { useState } from "react";
import { MovieContext, ThemeContext } from "./assets/context/index";

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
      </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

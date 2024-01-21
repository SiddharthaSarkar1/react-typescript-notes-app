import React, { useContext, useState } from "react";

import "./App.css";
import { ThemeContext } from "./context/theme/theme";
import Home from "./pages/home/home";
import Switch from "react-switch";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useState("light");
  const [checked, setChecked] = useState(false);

  const changeHandler = (check: boolean) => {
    setChecked(!checked);
    if (check) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Switch
        className="react-switch"
        uncheckedIcon={
          <FaMoon
            size={20}
            color="white"
            style={{ paddingTop: "3px", paddingRight: "4px", float: 'right' }}
          />
        }
        checkedIcon={
          <FaSun
            size={20}
            color="#fffb00"
            style={{ paddingTop: "3px", paddingLeft: "4px", float: 'left' }}
          />
        }
        onChange={changeHandler}
        checked={checked}
        offColor="#333"
        onColor="#640000"
      />
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;

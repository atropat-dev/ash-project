import "./App.css"
import "./styles/light.css"
import "./styles/dark.css"
import Button from "@mui/material/Button"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Feed from "./components/Feed"
import { createContext } from "react"
import { useState, useRef, useEffect } from "react"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined"

export const ThemeContext = createContext(null)

function App({ children }) {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      <div className="App" id={theme}>
        <Header>
          <div className="logo">Ash Team</div>
          <div className={`buttons`}>
            <label>
              <button className="lightButton">
                <LightModeOutlinedIcon />
              </button>
              <input id="myCheckbox" type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
            </label>

            <button className="darkButton" id="myButton">
              <BedtimeOutlinedIcon />
            </button>
          </div>
          <div className="email">info@ash.com</div>
        </Header>
        <Feed />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App

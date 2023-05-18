import "./App.css"
import "./styles/light.css"
import "./styles/dark.css"
import Button from "@mui/material/Button"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Feed from "./components/Feed"
import { createContext } from "react"
import { useState } from "react"

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={(theme, setTheme)}>
      <div className="App" id={theme}>
        <Header />
        <Feed />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App

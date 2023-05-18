import Day from "../icons/day.svg"
import Night from "../icons/night.svg"
import React, { useEffect, useRef, useState } from "react"
const myStyles = `
    display: block;
    width: 80%;
    background-color: red;
    border: 2px;
    font-size: 5em;
    color: white;
    margin: 20px;
    padding-left: 10px;
    padding-bottom: 10px;
    border: 2px solid black;
`
export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleModeChange = (e) => {
    e.preventDefault()
    if (e.target.classList.contains("selected")) {
      return
    }
    setIsDarkMode(!isDarkMode)
    handleDarkMode()
  }

  const handleDarkMode = () => {
    if (isDarkMode) {
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    } else {
      const nightIcon = document.querySelectorAll(".nightIcon")
      nightIcon.style.background = "red"
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }
  }

  return (
    <header>
      <div className="logo">Ash Team</div>
      <div className={`buttons`}>
        <a href="#" className={`link`}>
          <img src={Day} className="dayIcon" />
        </a>
        <a href="#" className={`link`}>
          <img src={Night} className="nightIcon" />
        </a>
      </div>
      <div className="email">info@ash.com</div>
    </header>
  )
}

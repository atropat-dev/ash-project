import React from "react"
import Day from "../icons/day.svg"
import Night from "../icons/night.svg"

export default function Header() {
  return (
    <header>
      <div className="logo">Ash Team</div>
      <div className="buttons">
        <a href="#" className="link">
          <img src={Day} className="dayIcon" />
        </a>
        <a href="#" className="link" autoFocus>
          <img src={Night} className="nightIcon" />
        </a>
      </div>
      <div className="email">info@ash.com</div>
    </header>
  )
}

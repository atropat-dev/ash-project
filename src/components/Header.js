import React from "react"
import Day from "../icons/day.svg"
import Night from "../icons/night.svg"

export default function Header() {
  return (
    <header>
      <div className="logo">Ash Team</div>
      <div className="buttons">
        <a href="#">
          <img src={Day} className="dayIcon" />
        </a>
        <a href="#">
          <img src={Night} className="nightIcon" />
        </a>
      </div>
      <div className="email">info@ash.com</div>
    </header>
  )
}

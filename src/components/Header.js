import React, { Children, useState } from "react"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined"
import toggleTheme from "../App"
import theme from "../App"

export default function Header({ children, props }) {
  return (
    <header>
      {children}
      
    </header>
  )
}

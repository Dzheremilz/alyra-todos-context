import ColorModeSwitcher from "./ColorModeSwitcher"
import { useDarkMode } from "../context/DarkModeContext"

const ColorModeContainer = ({ children }) => {
  const { darkMode } = useDarkMode()
  const modeClass = darkMode ? "bg-dark text-white" : ""

  return (
    <div className={`${modeClass} min-vh-100`}>
      <ColorModeSwitcher />
      {children}
    </div>
  )
}

export default ColorModeContainer

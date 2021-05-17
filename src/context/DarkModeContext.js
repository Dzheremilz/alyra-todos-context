import { createContext, useContext, useState, useEffect } from 'react'

export const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("my-dark-mode")) || false
  )

  useEffect(() => {
    localStorage.setItem("my-dark-mode", JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error("useDarkMode within DarkModeContext.Provider")
  }
  return context
}
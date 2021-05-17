import Todos from "./components/Todos"
import ColorModeContainer from "./components/ColorModeContainer"
import { DarkModeProvider } from "./context/DarkModeContext"

function App() {
  return (
    <DarkModeProvider>
      <ColorModeContainer>
        <div className="container my-4">
          <h1 className="text-center">ToDos App</h1>
          <Todos />
        </div>
      </ColorModeContainer>
    </DarkModeProvider>
  )
}

export default App

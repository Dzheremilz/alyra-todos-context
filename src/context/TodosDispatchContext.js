import { createContext, useContext } from 'react'

export const TodosDispatchContext = createContext()

export const useTodosDispatch = () => {
  const context = useContext(TodosDispatchContext)
  if (context === undefined) {
    throw new Error("useTodosDispatch within TodosDispachContext.Provider")
  }
  return context
}
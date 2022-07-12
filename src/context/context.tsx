import React, { useContext, useReducer } from 'react'
import data from '../data/data.json'
import { reducer } from '../reducer/reducer'
import { appState } from '../types/types'
import { ActionTypes } from '../reducer/reducer'

interface contextType extends appState {
  dispatch: React.Dispatch<ActionTypes>
}

const initialState: appState = data

const AppContext = React.createContext<contextType | null>(null)

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

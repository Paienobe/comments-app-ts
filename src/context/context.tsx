import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { ActionType, initialState, reducer } from '../reducer/reducer'
import { StateType } from '../types/Types'

type AppContextType = {
  state: StateType
  dispatch: React.Dispatch<ActionType>
  toggleModal: boolean
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>
}

type AppProviderType = {
  children: ReactNode
}

export const AppContext = createContext<AppContextType | null>(null)

export const AppProvider = ({ children }: AppProviderType) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [toggleModal, setToggleModal] = useState(false)

  useEffect(() => {
    if (toggleModal) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'unset'
    }
  }, [toggleModal])

  return (
    <AppContext.Provider
      value={{ state, dispatch, toggleModal, setToggleModal }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

import React from 'react'
import { appState } from '../types/types'

export type ActionTypes = {
  type: 'ADD COMMENT' | 'DELETE COMMENT' | 'ADD REPLY' | 'DELETE REPLY'
}

export const reducer = (state: appState, action: ActionTypes) => {
  if (action.type === 'ADD COMMENT') {
    return state
  } else if (action.type === 'DELETE COMMENT') {
    return state
  } else if (action.type === 'ADD REPLY') {
    return state
  } else if (action.type === 'DELETE REPLY') {
    return state
  } else {
    throw new Error()
  }
}

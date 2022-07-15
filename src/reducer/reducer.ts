import { Comments, StateType } from '../Types/types'
import data from '../data/data.json'

export const initialState: StateType = data

type UpdateAction = {
  type: 'ADD_COMMENT' | 'EDIT_COMMENT'
  payload: string
}

type DeleteAction = {
  type: 'DELETE_COMMENT'
}

export type ActionType = UpdateAction | DeleteAction

export const reducer = (state: StateType, action: ActionType) => {
  if (action.type === 'ADD_COMMENT') {
    const newComment: Comments = {
      id: Date.now(),
      content: action.payload,
      createdAt: 'now',
      score: 0,
      user: state.currentUser,
      replies: [],
    }

    const updatedState = { ...state, comments: [...state.comments, newComment] }

    return updatedState
  } else if (action.type === 'DELETE_COMMENT') {
    return state
  } else if (action.type === 'EDIT_COMMENT') {
    return state
  } else {
    throw new Error()
  }
}

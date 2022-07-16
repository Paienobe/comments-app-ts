import { Comments, StateType } from '../types/Types'
import data from '../data/data.json'

export const initialState: StateType = data

type NewCommentAction = {
  type: 'ADD_COMMENT'
  payload: string
}

type EditAction = {
  type: 'EDIT_COMMENT'
  payload: string | number
}

type DeleteAction = {
  type: 'DELETE_COMMENT'
  payload: number
}

export type ActionType = NewCommentAction | EditAction | DeleteAction

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
    const checkIfCommentExists = state.comments.find((comment) => {
      return comment.id === action.payload
    })

    if (checkIfCommentExists) {
      const updatedComments = state.comments.filter((comment) => {
        return comment.id !== action.payload
      })

      const updatedState = { ...state, comments: updatedComments }

      return updatedState
    }
    return state
  } else if (action.type === 'EDIT_COMMENT') {
    return state
  } else {
    throw new Error()
  }
}

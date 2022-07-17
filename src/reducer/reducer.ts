import { Comments, ReplyType, StateType } from '../types/Types'
import data from '../data/data.json'
import moment from 'moment'
import { type } from 'os'

const getDataFromLocalStorage = () => {
  const checkForData = localStorage.getItem('appState')
  if (checkForData) {
    return JSON.parse(checkForData)
  } else {
    return data
  }
}

export const initialState: StateType = getDataFromLocalStorage()

type NewCommentAction = {
  type: 'ADD_COMMENT'
  payload: string
}

type NewReplyAction = {
  type: 'ADD_REPLY' | 'EDIT_REPLY'
  payload: { id: number; content: string }
}

type EditAction = {
  type: 'EDIT_COMMENT'
  payload: string | number
}

type DeleteAction = {
  type: 'DELETE_COMMENT' | 'DELETE_REPLY'
  payload: number
}

type VoteAction = {
  type:
    | 'UPVOTE_COMMENT'
    | 'UPVOTE_REPLY'
    | 'DOWNVOTE_COMMENT'
    | 'DOWNVOTE_REPLY'
  payload: number
}

export type ActionType =
  | NewCommentAction
  | EditAction
  | DeleteAction
  | VoteAction
  | NewReplyAction

export const reducer = (state: StateType, action: ActionType) => {
  if (action.type === 'ADD_COMMENT') {
    const newComment: Comments = {
      id: Date.now(),
      content: action.payload,
      createdAt: moment().fromNow(),
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
  } else if (action.type === 'ADD_REPLY') {
    if (action.payload.content) {
      const commentToBeReplied = state.comments.find((comment) => {
        return comment.id === action.payload.id
      })

      const timetest = () => {}

      timetest()

      const newReply: ReplyType = {
        id: Date.now(),
        content: action.payload.content,
        createdAt: moment().fromNow(),
        score: 0,
        replyingTo: commentToBeReplied?.user.username!,
        user: state.currentUser,
      }

      const updatedCommentToBeReplied = {
        ...commentToBeReplied!,
        replies: [...commentToBeReplied?.replies!, newReply],
      }

      const updatedComments = state.comments.map((comment) => {
        if (comment.id === commentToBeReplied?.id) {
          return updatedCommentToBeReplied
        } else {
          return comment
        }
      })

      const updatedState = { ...state, comments: updatedComments }

      return updatedState
    }
    return state
  } else if (action.type === 'DELETE_REPLY') {
    const commentWithReplyToBeDeleted = state.comments.find((comment) => {
      return comment.replies.some((reply) => {
        return reply.id === action.payload
      })
    })

    const updateRepliesInComment = commentWithReplyToBeDeleted?.replies.filter(
      (comment) => {
        return comment.id !== action.payload
      }
    )

    const updatedComment = {
      ...commentWithReplyToBeDeleted!,
      replies: updateRepliesInComment!,
    }

    const newComments = state.comments.map((comment) => {
      if (comment.id === commentWithReplyToBeDeleted?.id) {
        return updatedComment
      } else {
        return comment
      }
    })

    const updatedState = { ...state, comments: newComments }

    return updatedState
  } else if (action.type === 'EDIT_REPLY') {
    return state
  } else if (action.type === 'UPVOTE_COMMENT') {
    const commentToBeVoted = state.comments.find((comment) => {
      return comment.id === action.payload
    })

    const updatedCommentScore = {
      ...commentToBeVoted!,
      score: commentToBeVoted?.score! + 1,
    }

    const updatedComments = state.comments.map((comment) => {
      if (comment.id === action.payload) {
        return updatedCommentScore
      } else {
        return comment
      }
    })

    return { ...state, comments: updatedComments }
  } else if (action.type === 'DOWNVOTE_COMMENT') {
    const commentToBeDownvoted = state.comments.find((comment) => {
      return comment.id === action.payload
    })

    const updatedCommentScore = {
      ...commentToBeDownvoted!,
      score: commentToBeDownvoted?.score! - 1,
    }

    const updatedComments = state.comments.map((comment) => {
      if (comment.id === action.payload) {
        return updatedCommentScore
      } else {
        return comment
      }
    })

    return { ...state, comments: updatedComments }
  } else if (action.type === 'UPVOTE_REPLY') {
    const commentWithReplyToBeUpvoted = state.comments.find((comment) => {
      return comment.replies.some((reply) => {
        return reply.id === action.payload
      })
    })

    const updatedReplyScore = commentWithReplyToBeUpvoted!.replies.map(
      (reply) => {
        if (reply.id === action.payload) {
          return { ...reply!, score: reply.score + 1 }
        } else {
          return reply
        }
      }
    )

    const updatedReplies = state.comments.map((comment) => {
      if (comment.id === commentWithReplyToBeUpvoted!.id) {
        return { ...commentWithReplyToBeUpvoted!, replies: updatedReplyScore }
      } else {
        return comment
      }
    })

    return { ...state, comments: updatedReplies }
  } else if (action.type === 'DOWNVOTE_REPLY') {
    const commentWithReplyToBeDownvoted = state.comments.find((comment) => {
      return comment.replies.some((reply) => {
        return reply.id === action.payload
      })
    })

    const updatedReplyScore = commentWithReplyToBeDownvoted!.replies.map(
      (reply) => {
        if (reply.id === action.payload) {
          return { ...reply!, score: reply.score - 1 }
        } else {
          return reply
        }
      }
    )

    const updatedReplies = state.comments.map((comment) => {
      if (comment.id === commentWithReplyToBeDownvoted!.id) {
        return { ...commentWithReplyToBeDownvoted!, replies: updatedReplyScore }
      } else {
        return comment
      }
    })

    return { ...state, comments: updatedReplies }
  } else {
    throw new Error()
  }
}

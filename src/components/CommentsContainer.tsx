import { log } from 'console'
import React from 'react'
import { useGlobalContext } from '../context/context'
import Comment from './Comments/Comment'

const CommentsContainer = () => {
  const { ...state } = useGlobalContext()
  const { comments } = { ...state }

  return (
    <div className='w-full'>
      {comments.map((comment, index) => {
        return <Comment key={comment.id} {...comment} />
      })}
    </div>
  )
}

export default CommentsContainer

import React from 'react'
import { useGlobalContext } from '../context/context'
import Comment from './Comments/Comment'
import Modal from './Modal'

const CommentsContainer = () => {
  const state = useGlobalContext()
  const comments = state?.state.comments
  const toggleModal = state?.toggleModal

  return (
    <div className='w-full'>
      {comments?.map((comment) => {
        return <Comment key={comment.id} {...comment} />
      })}

      {toggleModal && <Modal />}
    </div>
  )
}

export default CommentsContainer

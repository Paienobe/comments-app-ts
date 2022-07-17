import React, { useState } from 'react'
import { useGlobalContext } from '../context/context'
import Comment from './Comments/Comment'
import Modal from './Modal'

const CommentsContainer = () => {
  const state = useGlobalContext()
  const comments = state?.state.comments
  const toggleModal = state?.toggleModal
  const [IDofComment, setIDofComment] = useState(0)

  return (
    <div className='w-full'>
      {comments?.map((comment) => {
        return (
          <div key={comment.id}>
            <Comment {...comment} setIDofComment={setIDofComment} />
          </div>
        )
      })}

      {toggleModal && <Modal IDofComment={IDofComment} />}
    </div>
  )
}

export default CommentsContainer

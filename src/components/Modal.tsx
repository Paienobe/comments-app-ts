import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/context'

const Modal = ({ IDofComment }: { IDofComment: number }) => {
  const globalContext = useGlobalContext()
  const toggleModal = useGlobalContext()?.toggleModal!
  const setToggleModal = globalContext?.setToggleModal!
  const dispatch = useGlobalContext()?.dispatch!
  const comments = useGlobalContext()?.state.comments!

  const isAComment = comments.some((comment) => {
    return comment.id === IDofComment
  })

  const deleteCommentOrReply = () => {
    isAComment
      ? dispatch({ type: 'DELETE_COMMENT', payload: IDofComment })
      : dispatch({ type: 'DELETE_REPLY', payload: IDofComment })
  }

  return (
    <div className='fixed bg-slate-900 bg-opacity-50 top-0 bottom-0 left-0 right-0 flex items-center justify-center z-10'>
      <div className='bg-white rounded-lg p-4 w-[90%] sm:w-[50%] lg:w-[30%]'>
        <h3 className='font-bold text-slate-700 mb-4 text-lg'>
          Delete comment
        </h3>

        <p className='font-light text-slate-600'>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>

        <div className='flex items-center justify-between mt-4'>
          <button
            className='py-3 bg-slate-600 text-white rounded-md w-[49%] font-semibold'
            onClick={() => {
              setToggleModal(false)
            }}
          >
            NO, CANCEL
          </button>
          <button
            className='py-3 bg-red-600 text-white rounded-md w-[49%] font-semibold'
            onClick={() => {
              deleteCommentOrReply()
              setToggleModal(false)
            }}
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal

import React, { useState } from 'react'
import { useGlobalContext } from '../context/context'
import userAvatar from '../assets/avatars/image-juliusomo.webp'

const ReplyOrEditInput = ({
  id,
  setMakeReply,
  isAReply,
  setReplyAReply,
}: {
  id: number
  setMakeReply: React.Dispatch<React.SetStateAction<boolean>>
  isAReply: boolean
  setReplyAReply: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const globalContext = useGlobalContext()
  const dispatch = globalContext?.dispatch!
  const [replyContent, setReplyContent] = useState('')
  return (
    <form
      className='mb-4'
      onSubmit={(e) => {
        e.preventDefault()
        !isAReply &&
          dispatch({
            type: 'ADD_REPLY',
            payload: { id, content: replyContent },
          })
        isAReply &&
          dispatch({
            type: 'REPLY_A_REPLY',
            payload: { id, content: replyContent },
          })
        setReplyContent('')
        setMakeReply(false)
        isAReply && setReplyAReply(false)
      }}
    >
      <textarea
        rows={2}
        placeholder='Insert text...'
        className='w-full rounded-lg p-4'
        value={replyContent}
        onChange={(e) => {
          setReplyContent(e.target.value)
        }}
      ></textarea>
      <div className='flex items-center justify-between'>
        <img src={userAvatar} alt='user_avatar' className='w-10' />
        <button className='bg-blue-900 text-white p-2 rounded-lg font-medium w-20'>
          REPLY
        </button>
      </div>
    </form>
  )
}

export default ReplyOrEditInput

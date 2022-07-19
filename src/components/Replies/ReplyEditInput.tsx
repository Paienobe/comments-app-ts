import React, { useState } from 'react'
import { useGlobalContext } from '../../context/context'

type ReplyInputProps = {
  id: number
  content: string
  setEditAReply: React.Dispatch<React.SetStateAction<number>>
}

const ReplyEditInput = ({ id, content, setEditAReply }: ReplyInputProps) => {
  const globalContext = useGlobalContext()
  const dispatch = globalContext?.dispatch!
  const [replyEditContent, setReplyEditContent] = useState(content)
  const editReply = () => {
    return dispatch({
      type: 'EDIT_REPLY',
      payload: { id, content: replyEditContent },
    })
  }
  return (
    <form
      className='mt-3 mb-2 sm:w-[90%] sm:ml-auto'
      onSubmit={(e) => {
        e.preventDefault()
        editReply()
        setEditAReply(0)
      }}
    >
      <textarea
        className=' border-slate-200 border-2 w-full p-3 rounded-lg'
        value={replyEditContent}
        onChange={(e) => {
          setReplyEditContent(e.target.value)
        }}
      ></textarea>
      <button className='bg-blue-800 text-white p-2 rounded-lg block ml-auto'>
        UPDATE
      </button>
    </form>
  )
}

export default ReplyEditInput

import React, { useState } from 'react'
import { useGlobalContext } from '../../context/context'

const EditInput = ({
  content,
  id,
  setIsEditing,
}: {
  content: string
  id: number
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const globalContext = useGlobalContext()
  const dispatch = globalContext?.dispatch!
  const [editContent, setEditContent] = useState(content)
  const editComment = () => {
    return dispatch({
      type: 'EDIT_COMMENT',
      payload: { id, content: editContent },
    })
  }
  return (
    <form
      className='mt-3 mb-2'
      onSubmit={(e) => {
        e.preventDefault()
        editComment()
        setIsEditing(false)
      }}
    >
      <textarea
        className=' border-slate-200 border-2 w-full p-3 rounded-lg'
        value={editContent}
        onChange={(e) => {
          setEditContent(e.target.value)
        }}
      ></textarea>
      <button className='bg-blue-800 text-white p-2 rounded-lg block ml-auto'>
        UPDATE
      </button>
    </form>
  )
}

export default EditInput

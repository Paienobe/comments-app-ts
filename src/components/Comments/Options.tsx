import React from 'react'
import replyIcon from '../../assets/icon-reply.svg'
import deleteIcon from '../../assets/icon-delete.svg'
import editIcon from '../../assets/icon-edit.svg'
import { useGlobalContext } from '../../context/context'
import { User } from '../../types/Types'

const Options = ({
  id,
  username,
  setIDofComment,
  setMakeReply,
}: {
  id: number
  username: string
  setIDofComment: React.Dispatch<React.SetStateAction<number>>
  setMakeReply: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const globalContext = useGlobalContext()
  const currentUser = useGlobalContext()?.state.currentUser!
  const setToggleModal = useGlobalContext()?.setToggleModal!

  return (
    <div className='font-bold'>
      {currentUser.username !== username ? (
        <div
          className='hover:scale-105 cursor-pointer transition flex items-center text-blue-800'
          onClick={() => {
            setMakeReply(true)
          }}
        >
          <img src={replyIcon} alt='reply' /> <p className='ml-3'>Reply</p>
        </div>
      ) : (
        <div className='flex items-center'>
          <div
            className='flex items-center hover:scale-105 cursor-pointer transition'
            onClick={() => {
              setToggleModal(true)
              setIDofComment(id)
            }}
          >
            <img src={deleteIcon} alt='reply' />{' '}
            <p className='mx-3 text-red-400'>Delete</p>
          </div>
          <div className='flex items-center hover:scale-105 cursor-pointer transition'>
            <img src={editIcon} alt='reply' />{' '}
            <p className='mx-3 mr-0 text-blue-800'>Edit</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Options

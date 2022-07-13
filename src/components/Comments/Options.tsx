import React from 'react'
import replyIcon from '../../assets/icon-reply.svg'
import deleteIcon from '../../assets/icon-delete.svg'
import editIcon from '../../assets/icon-edit.svg'
import { user } from '../../types/types'
import { useGlobalContext } from '../../context/context'

const Options = ({ username }: user) => {
  const { ...state } = useGlobalContext()
  const { currentUser } = { ...state }

  return (
    <div className='font-bold'>
      {currentUser.username !== username ? (
        <div className='hover:scale-105 cursor-pointer transition flex items-center'>
          <img src={replyIcon} alt='reply' /> <p className='ml-3'>Reply</p>
        </div>
      ) : (
        <div className='flex items-center'>
          <div className='flex items-center hover:scale-105 cursor-pointer transition'>
            <img src={deleteIcon} alt='reply' />{' '}
            <p className='mx-3 text-red-400'>Delete</p>
          </div>
          <div className='flex items-center hover:scale-105 cursor-pointer transition'>
            <img src={editIcon} alt='reply' />{' '}
            <p className='mx-3 mr-0 text-blue-900'>Edit</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Options

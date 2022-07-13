import React from 'react'
import userAvatar from '../assets/avatars/image-juliusomo.webp'

const CommentInput = () => {
  return (
    <form className='w-full bg-white rounded-lg overflow-hidden p-4 sm:relative'>
      <textarea
        name='comment'
        placeholder='Add a comment...'
        rows={3}
        className='w-full border rounded-lg p-4 placeholder:text-slate-500 sm:w-[70%] sm:block sm:ml-[11%]'
      ></textarea>

      <div className='my-4 flex items-center justify-between sm:absolute sm:top-0 sm:left-4 sm:right-4 sm:items-start'>
        <img
          src={userAvatar}
          alt='current_user_avatar'
          className='w-10 sm:w-12'
        />
        <button className='bg-blue-900 text-white p-4 w-[6.5rem] rounded-lg font-semibold hover:bg-blue-800 transition-all'>
          SEND
        </button>
      </div>
    </form>
  )
}

export default CommentInput

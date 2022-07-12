import React from 'react'
import userAvatar from '../assets/avatars/image-juliusomo.webp'

const CommentInput = () => {
  return (
    <form className='w-full bg-white rounded-lg overflow-hidden p-4'>
      <textarea
        name='comment'
        placeholder='Add a comment...'
        rows={3}
        className='w-full border rounded-lg p-4 placeholder:text-slate-500'
      ></textarea>

      <div className='my-4 flex items-center justify-between'>
        <img src={userAvatar} alt='current_user_avatar' className='w-10' />
        <button className='bg-blue-900 text-white p-4 w-[6.5rem] rounded-lg font-semibold'>
          SEND
        </button>
      </div>
    </form>
  )
}

export default CommentInput

import React from 'react'
import { Comments } from '../../types/Types'
import Reply from '../Replies/Reply'
import Content from './Content'
import Options from './Options'
import User from './User'
import Votes from './Votes'

const Comment = ({
  id,
  content,
  createdAt,
  replies,
  score,
  user,
}: Comments) => {
  return (
    <>
      <div className='bg-white p-4 rounded-lg mb-4 text-blue-900 relative'>
        <User {...user} createdAt={createdAt} />
        <Content replyingTo='' content={content} />
        <div className='flex items-center justify-between sm:absolute sm:left-4 sm:right-4 sm:top-4 sm:items-start'>
          <Votes score={score} />
          <Options {...user} />
        </div>
      </div>

      <div className='mb-4 border-0 border-transparent border-l-2 border-slate-500 border-opacity-20 pl-4 sm:w-[95%] sm:ml-auto sm:pl-8'>
        {replies.map((reply) => {
          return <Reply key={reply.id} {...reply} />
        })}
      </div>
    </>
  )
}

export default Comment

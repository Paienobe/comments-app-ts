import React from 'react'
import { comment } from '../../types/types'
import Reply from '../Replies/Reply'
import Content from './Content'
import Options from './Options'
import User from './User'
import Votes from './Votes'

const Comment = ({ id, content, createdAt, replies, score, user }: comment) => {
  return (
    <>
      <div className='bg-white p-4 rounded-lg mb-4 text-blue-900'>
        <User {...user} createdAt={createdAt} />
        <Content content={content} />
        <div className='flex items-center justify-between'>
          <Votes score={score} />
          <Options {...user} />
        </div>
      </div>

      <div className='mb-4 border-0 border-transparent border-l-2 border-slate-500 border-opacity-20 pl-4'>
        {replies.map((reply) => {
          return <Reply key={reply.id} {...reply} />
        })}
      </div>
    </>
  )
}

export default Comment

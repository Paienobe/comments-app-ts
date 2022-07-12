import React from 'react'
import { reply } from '../../types/types'
import Content from '../Comments/Content'
import Options from '../Comments/Options'
import User from '../Comments/User'
import Votes from '../Comments/Votes'

const Reply = ({ id, content, createdAt, score, replyingTo, user }: reply) => {
  return (
    <div className='bg-white rounded-lg p-4 mb-4 text-blue-900'>
      <User {...user} createdAt={createdAt} />
      <Content content={content} />
      <div className='flex items-center justify-between'>
        <Votes score={score} />
        <Options {...user} />
      </div>
    </div>
  )
}

export default Reply

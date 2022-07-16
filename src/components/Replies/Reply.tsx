import React from 'react'
import { ReplyType } from '../../types/Types'
import Content from '../Comments/Content'
import Options from '../Comments/Options'
import User from '../Comments/User'
import Votes from '../Comments/Votes'
import { User as UserType } from '../../types/Types'

type ReplyProps = {
  id: number
  content: string
  createdAt: string
  replyingTo: string
  score: number
  user: UserType
  setIDofComment: React.Dispatch<React.SetStateAction<number>>
}

const Reply = ({
  id,
  content,
  createdAt,
  score,
  replyingTo,
  user,
  setIDofComment,
}: ReplyProps) => {
  return (
    <div className='bg-white rounded-lg p-4 mb-4 text-blue-900 sm:relative'>
      <User {...user} createdAt={createdAt} />
      <Content content={content} replyingTo={replyingTo} />
      <div className='flex items-center justify-between sm:absolute sm:left-4 sm:right-4 sm:top-4 sm:items-start'>
        <Votes score={score} />
        <Options {...user} id={id} setIDofComment={setIDofComment} />
      </div>
    </div>
  )
}

export default Reply

import React, { useState } from 'react'
import { ReplyType } from '../../types/Types'
import Content from '../Comments/Content'
import Options from '../Comments/Options'
import User from '../Comments/User'
import Votes from '../Comments/Votes'
import { User as UserType } from '../../types/Types'
import ReplyOrEditInput from '../ReplyOrEditInput'

type ReplyProps = {
  id: number
  content: string
  createdAt: string
  replyingTo: string
  score: number
  user: UserType
  setIDofComment: React.Dispatch<React.SetStateAction<number>>
  setMakeReply: React.Dispatch<React.SetStateAction<boolean>>
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}

const Reply = ({
  id,
  content,
  createdAt,
  score,
  replyingTo,
  user,
  setIDofComment,
  setMakeReply,
  setIsEditing,
}: ReplyProps) => {
  const [replyAReply, setReplyAReply] = useState(false)
  return (
    <>
      <div className='bg-white rounded-lg p-4 mb-4 text-blue-900 min-h-[10rem] sm:relative'>
        <User {...user} createdAt={createdAt} />
        <Content content={content} replyingTo={replyingTo} />
        <div className='flex items-center justify-between sm:absolute sm:left-4 sm:right-4 sm:top-4 sm:items-start'>
          <Votes id={id} score={score} isAReply />
          <Options
            {...user}
            id={id}
            setIDofComment={setIDofComment}
            setMakeReply={setMakeReply}
            isAReply
            setReplyAReply={setReplyAReply}
            setIsEditing={setIsEditing}
          />
        </div>
      </div>
      {replyAReply && (
        <ReplyOrEditInput
          id={id}
          setMakeReply={setMakeReply}
          isAReply
          setReplyAReply={setReplyAReply}
        />
      )}
    </>
  )
}

export default Reply

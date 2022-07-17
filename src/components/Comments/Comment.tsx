import React from 'react'
import { Comments, ReplyType, User as UserType } from '../../types/Types'
import Modal from '../Modal'
import Reply from '../Replies/Reply'
import Content from './Content'
import Options from './Options'
import User from './User'
import Votes from './Votes'
import moment from 'moment'

type CommentProps = {
  id: number
  content: string
  createdAt: string
  replies: ReplyType[]
  score: number
  user: UserType
  setIDofComment: React.Dispatch<React.SetStateAction<number>>
}

const Comment = ({
  id,
  content,
  createdAt,
  replies,
  score,
  user,
  setIDofComment,
}: CommentProps) => {
  return (
    <>
      <div className='bg-white p-4 rounded-lg mb-4 text-slate-700 relative min-h-[10rem]'>
        <User {...user} createdAt={createdAt} />
        <Content replyingTo='' content={content} />
        <div className='flex items-center justify-between sm:absolute sm:left-4 sm:right-4 sm:top-4 sm:items-start'>
          <Votes score={score} id={id} isAReply={false} />
          <Options {...user} id={id} setIDofComment={setIDofComment} />
        </div>
      </div>

      <div className='mb-4 border-0 border-transparent border-l-2 border-slate-500 border-opacity-20 pl-4 sm:w-[95%] sm:ml-auto sm:pl-8'>
        {replies.map((reply) => {
          return (
            <Reply key={reply.id} {...reply} setIDofComment={setIDofComment} />
          )
        })}
      </div>
    </>
  )
}

export default Comment

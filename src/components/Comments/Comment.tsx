import React, { useState } from 'react'
import { ReplyType, User as UserType } from '../../types/Types'
import Reply from '../Replies/Reply'
import Content from './Content'
import Options from './Options'
import User from './User'
import Votes from './Votes'
import ReplyOrEditInput from '../ReplyOrEditInput'
import EditInput from './EditInput'

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
  const [makeReply, setMakeReply] = useState(false)
  const [replyAReply, setReplyAReply] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editAReply, setEditAReply] = useState(0)

  return (
    <>
      <div className='bg-white p-4 rounded-lg mb-4 text-slate-700 relative min-h-[10rem]'>
        <User {...user} createdAt={createdAt} />
        {!isEditing ? (
          <Content replyingTo='' content={content} />
        ) : (
          <EditInput content={content} id={id} setIsEditing={setIsEditing} />
        )}
        <div className='flex items-center justify-between sm:absolute sm:left-4 sm:right-4 sm:top-4 sm:items-start'>
          <Votes score={score} id={id} isAReply={false} />
          <Options
            {...user}
            id={id}
            setIDofComment={setIDofComment}
            setMakeReply={setMakeReply}
            isAReply={false}
            setReplyAReply={setReplyAReply}
            setIsEditing={setIsEditing}
            setEditAReply={setEditAReply}
          />
        </div>
      </div>

      {makeReply && (
        <ReplyOrEditInput
          id={id}
          setMakeReply={setMakeReply}
          isAReply={false}
          setReplyAReply={setReplyAReply}
        />
      )}

      <div className='mb-4 border-0 border-transparent border-l-2 border-slate-500 border-opacity-20 pl-4 sm:w-[95%] sm:ml-auto sm:pl-8'>
        {replies.map((reply) => {
          return (
            <Reply
              key={reply.id}
              {...reply}
              setIDofComment={setIDofComment}
              setMakeReply={setMakeReply}
              setIsEditing={setIsEditing}
              setEditAReply={setEditAReply}
              editAReply={editAReply}
            />
          )
        })}
      </div>
    </>
  )
}

export default Comment

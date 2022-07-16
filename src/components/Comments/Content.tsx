import React from 'react'

const Content = ({
  content,
  replyingTo,
}: {
  content: string
  replyingTo: string
}) => {
  return (
    <p className='my-4 sm:w-[80%] sm:mx-auto sm:my-2 text-slate-700'>
      {replyingTo && <span className='font-bold'>@{replyingTo} </span>}
      {content}
    </p>
  )
}

export default Content

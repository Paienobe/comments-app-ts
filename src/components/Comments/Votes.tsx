import React, { useEffect, useState } from 'react'
import plus from '../../assets/icon-plus.svg'
import minus from '../../assets/icon-minus.svg'
import { useGlobalContext } from '../../context/context'

const Votes = ({
  score,
  id,
  isAReply,
}: {
  score: number
  id: number
  isAReply: boolean
}) => {
  const globalContext = useGlobalContext()
  const dispatch = globalContext?.dispatch!

  const getVoteStatus = () => {
    const checkIfUserHasVoted = localStorage.getItem(`comment-${id}`)
    if (checkIfUserHasVoted) {
      return JSON.parse(checkIfUserHasVoted)
    } else {
      return false
    }
  }

  const [hasVoted, setHasVoted] = useState(getVoteStatus())

  useEffect(() => {
    localStorage.setItem(`comment-${id}`, JSON.stringify(hasVoted))
  }, [hasVoted])

  const makeUpvote = () => {
    if (!hasVoted && !isAReply) {
      return dispatch({ type: 'UPVOTE_COMMENT', payload: id })
    } else if (!hasVoted && isAReply) {
      return dispatch({ type: 'UPVOTE_REPLY', payload: id })
    }
  }

  const makeDownvote = () => {
    if (hasVoted && !isAReply) {
      return dispatch({ type: 'DOWNVOTE_COMMENT', payload: id })
    } else if (hasVoted && isAReply) {
      return dispatch({ type: 'DOWNVOTE_REPLY', payload: id })
    }
  }

  return (
    <div
      className={`flex items-center bg-slate-200 py-2 w-[30%] rounded-lg sm:flex-col sm:w-10 sm:h-24 sm:py-4 sm:justify-between ${
        hasVoted && 'bg-slate-400'
      }`}
    >
      <button
        className='w-1/3 flex items-center justify-center'
        onClick={() => {
          makeUpvote()
          setHasVoted(true)
        }}
      >
        <img src={plus} alt='' className='hover:scale-150 transition-all' />
      </button>
      <p className='w-1/3 flex items-center justify-center font-bold text-slate-700'>
        {score}
      </p>
      <button
        className='w-1/3 flex items-center justify-center'
        onClick={() => {
          makeDownvote()
          setHasVoted(false)
        }}
      >
        <img src={minus} alt='' className='hover:scale-150 transition-all' />
      </button>
    </div>
  )
}

export default Votes

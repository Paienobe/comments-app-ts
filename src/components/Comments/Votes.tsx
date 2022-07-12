import React from 'react'
import plus from '../../assets/icon-plus.svg'
import minus from '../../assets/icon-minus.svg'

const Votes = ({ score }: { score: number }) => {
  return (
    <div className='flex items-center bg-indigo-100 py-2 w-[30%] rounded-lg'>
      <button className='w-1/3 flex items-center justify-center'>
        <img src={plus} alt='' />
      </button>
      <p className='w-1/3 flex items-center justify-center font-bold'>
        {score}
      </p>
      <button className='w-1/3 flex items-center justify-center'>
        <img src={minus} alt='' />
      </button>
    </div>
  )
}

export default Votes

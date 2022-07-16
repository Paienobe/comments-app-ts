import React from 'react'
import plus from '../../assets/icon-plus.svg'
import minus from '../../assets/icon-minus.svg'

const Votes = ({ score }: { score: number }) => {
  return (
    <div className='flex items-center bg-slate-200 py-2 w-[30%] rounded-lg sm:flex-col sm:w-10 sm:h-24 sm:py-4 sm:justify-between'>
      <button className='w-1/3 flex items-center justify-center'>
        <img src={plus} alt='' className='hover:scale-150 transition-all' />
      </button>
      <p className='w-1/3 flex items-center justify-center font-bold text-slate-700'>
        {score}
      </p>
      <button className='w-1/3 flex items-center justify-center'>
        <img src={minus} alt='' className='hover:scale-150 transition-all' />
      </button>
    </div>
  )
}

export default Votes

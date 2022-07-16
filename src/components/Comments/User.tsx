import React from 'react'
import amyrobson from '../../assets/avatars/image-amyrobson.webp'
import juliusomo from '../../assets/avatars/image-juliusomo.webp'
import maxblagun from '../../assets/avatars/image-maxblagun.webp'
import ramsesmiron from '../../assets/avatars/image-ramsesmiron.webp'
import { useGlobalContext } from '../../context/context'
import ReactTimeAgo from 'react-time-ago'

const User = ({
  username,
  createdAt,
}: {
  createdAt: string
  username: string
}) => {
  const { ...state } = useGlobalContext()
  const { currentUser } = { ...state.state }

  const avatars: { [key: string]: string } = {
    amyrobson,
    juliusomo,
    maxblagun,
    ramsesmiron,
  }

  return (
    <div className='flex items-center w-full sm:ml-[10%]'>
      <img src={avatars[`${username}`]} alt={username} className='w-10 mr-3' />
      <h3 className='font-bold text-slate-700 mr-3'>{username}</h3>
      {currentUser.username === username && (
        <p className='bg-blue-800 text-white text-sm px-2 pb-1 mr-3'>you</p>
      )}
      <p className='text-slate-700'>{createdAt}</p>
    </div>
  )
}

export default User

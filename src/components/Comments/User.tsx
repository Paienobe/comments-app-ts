import React from 'react'
import { user } from '../../types/types'
import amyrobson from '../../assets/avatars/image-amyrobson.webp'
import juliusomo from '../../assets/avatars/image-juliusomo.webp'
import maxblagun from '../../assets/avatars/image-maxblagun.webp'
import ramsesmiron from '../../assets/avatars/image-ramsesmiron.webp'
import { useGlobalContext } from '../../context/context'

const User = ({
  username,
  createdAt,
}: {
  createdAt: string
  image: { png: string; webp: string }
  username: string
}) => {
  const { ...state } = useGlobalContext()
  const { currentUser } = { ...state }

  const avatars: { [key: string]: string } = {
    amyrobson,
    juliusomo,
    maxblagun,
    ramsesmiron,
  }

  return (
    <div className='flex items-center w-full sm:ml-[10%]'>
      <img src={avatars[`${username}`]} alt={username} className='w-10 mr-3' />
      <h3 className='font-bold text-indigo-900 mr-3'>{username}</h3>
      {currentUser.username === username && (
        <p className='bg-blue-800 text-white text-sm px-2 pb-1 mr-3'>you</p>
      )}
      <p className='text-indigo-900'>{createdAt}</p>
    </div>
  )
}

export default User

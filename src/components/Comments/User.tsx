import React from 'react'
import { user } from '../../types/types'
import amyrobson from '../../assets/avatars/image-amyrobson.webp'
import juliusomo from '../../assets/avatars/image-juliusomo.webp'
import maxblagun from '../../assets/avatars/image-maxblagun.webp'
import ramsesmiron from '../../assets/avatars/image-ramsesmiron.webp'

const User = ({
  username,
  createdAt,
}: {
  createdAt: string
  image: { png: string; webp: string }
  username: string
}) => {
  const avatar =
    username === 'amyrobson'
      ? amyrobson
      : username === 'juliusomo'
      ? juliusomo
      : username === ' maxblagun'
      ? maxblagun
      : ramsesmiron

  return (
    <div className='flex items-center w-full'>
      <img src={avatar} alt={username} className='w-10 mr-3' />
      <h3 className='font-bold text-indigo-900 mr-3'>{username}</h3>
      <p className='text-indigo-900'>{createdAt}</p>
    </div>
  )
}

export default User

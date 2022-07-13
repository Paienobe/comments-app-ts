import React from 'react'
import CommentInput from './components/CommentInput'
import CommentsContainer from './components/CommentsContainer'

function App() {
  return (
    <main className='App bg-indigo-100 min-h-screen flex flex-col items-center justify-center p-4 py-10 transition sm:px-10 sm:overflow-x-hidden lg:px-[25%]'>
      <CommentsContainer />
      <CommentInput />
    </main>
  )
}

export default App

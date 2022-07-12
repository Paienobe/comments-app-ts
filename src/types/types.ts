export type user = {
  image: {
    png: string
    webp: string
  }
  username: string
}

export type comment = {
  id: number
  content: string
  createdAt: string
  score: number
  user: {
    image: {
      png: string
      webp: string
    }
    username: string
  }
  replies: reply[]
}

export type reply = {
  id: number
  content: string
  createdAt: string
  score: number
  replyingTo: string
  user: {
    image: {
      png: string
      webp: string
    }
    username: string
  }
}

export type appState = {
  currentUser: user
  comments: comment[]
}

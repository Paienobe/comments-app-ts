export type User = {
  image: {
    png: string
    webp: string
  }
  username: string
}

export type ReplyType = {
  id: number
  content: string
  createdAt: string
  score: number
  replyingTo: string
  user: User
}

export type Comments = {
  id: number
  content: string
  createdAt: string
  score: number
  user: User
  replies: ReplyType[]
}

export type StateType = {
  currentUser: User
  comments: Comments[]
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getPostById } from '../../features/posts/postsSlice'

const PostDetail = () => {
  const{id} = useParams()
  const dispatch = useDispatch()
  const { post } = useSelector((state) => state.posts);
  
  useEffect (() => {
    dispatch(getPostById(id))
  },[])

  return (
    <div >PostDetail
      
      <p>{post.content}</p>
      <p>{post.title}</p>
    </div>
  )
}

export default PostDetail
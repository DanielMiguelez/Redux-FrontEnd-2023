import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useDispatch } from "react-redux";
import { getOnePostByName } from '../../features/posts/postsSlice';
import Post from '../Posts/Post/Post';


const Search = () => {
  const { postName } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOnePostByName(postName))
  }, [postName]);

  return (
    <div>Search
      <Post/>

    </div>
  )
}

export default Search
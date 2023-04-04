import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAll, reset } from "../../features/posts/postsSlice";
import Post from "./Post/Post";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
    dispatch(reset())
  }, []);

  return (
    <div>
      <h1>Posts</h1> 
      <Post />
    </div>
  );
};

export default Posts;

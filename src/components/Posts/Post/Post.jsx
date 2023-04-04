import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Post = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <div>
      Posts de los usuarios
      {posts?.post?.map((post) => (
        <div key={post?.id}>
          <Link to={"/post/" + post.id}>
            <p>Title: {post.title}</p>
            <p>content: {post.content}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Post;
import React from "react";
import SinglePost from "./SinglePost";
import Loading from "./Loading";
import { useGlobalContext } from "../Context";

const PostList = () => {
  const { posts, loading } = useGlobalContext();

  console.log("PostList:", posts);

  if (loading) {
    return <Loading />;
  }

  if (posts.length < 1) {
    return (
      <div className="no-list">
        <h2>Could not find posts that match your criteria</h2>
      </div>
    );
  }

  return (
    <div className="list-container">
      {posts.map((single) => {
        return <SinglePost key={single.objectID} {...single} />;
      })}
    </div>
  );
};

export default PostList;

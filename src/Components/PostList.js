import React, { useState } from "react";
import SinglePost from "./SinglePost";
import Loading from "./Loading";
import { useGlobalContext } from "../Context";

const PostList = () => {
  const { posts, loading, searchTerm, setSearchTerm } = useGlobalContext();

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
    <div className="post-list">
      <h1>This is a list</h1>
    </div>
  );
};

export default PostList;

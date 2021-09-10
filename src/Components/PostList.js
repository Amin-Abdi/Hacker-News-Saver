import React, { useState } from "react";
import SinglePost from "./SinglePost";
import Loading from "./Loading";

const PostList = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="post-list">
      <h1>This is a list</h1>
    </div>
  );
};

export default PostList;

import React from "react";
import SinglePost from "./SinglePost";
import Loading from "./Loading";
import { useGlobalContext } from "../Context";
import PostService from "../Services/PostService";

import { useAlert } from "react-alert";

const PostList = () => {
  const { posts, loading, setSaveMessage } = useGlobalContext();
  const alert = useAlert();

  //Sending the post to the backend API using axios
  const savePost = async (id) => {
    console.log("Post saved:", id);
    try {
      const response = await fetch(`https://hn.algolia.com/api/v1/items/${id}`);
      const fetchedPost = await response.json();
      console.log(fetchedPost);
      PostService.createPost(fetchedPost).then((res) => {
        console.log(res.data, "saved");
        alert.show("Post saved", {
          timeout: 2000,
          type: "success",
        });
      });
      setSaveMessage(true);
    } catch (error) {
      console.log(error);
    }
  };

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
        return (
          <SinglePost key={single.objectID} savePost={savePost} {...single} />
        );
      })}
    </div>
  );
};

export default PostList;

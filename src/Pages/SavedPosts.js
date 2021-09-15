import React, { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import PostService from "../Services/PostService";
import SavedSingle from "../Components/SavedSingle";

import { useAlert } from "react-alert";

//This is  the saved Posts page
const SavedPosts = () => {
  const [load, setLoad] = useState(true);
  const [saved, setSaved] = useState([]);

  const alert = useAlert();

  const fetchSaved = () => {
    PostService.getPosts().then((res) => {
      setSaved(res.data);
      setLoad(false);
    });
  };

  useEffect(() => {
    fetchSaved();
  }, []);

  const deletePost = (id) => {
    PostService.deletePost(id).then((res) => {
      const newPosts = saved.filter((single) => single.id !== id);
      setSaved(newPosts);
    });
    alert.show("Post Deleted", {
      timeout: 1000,
      type: "error",
    });
  };

  //Displaying the loading animation if the posts havent loaded yet
  if (load) {
    return (
      <div className="saved-container">
        <Loading className="saved-loader" />
      </div>
    );
  }

  //When there is no more posts left to show
  if (saved.length < 1) {
    return (
      <div className="saved-container">
        <h2>There are no Saved Posts</h2>
      </div>
    );
  }

  return (
    <>
      <div className="saved-title">
        <h2>My Saved Posts</h2>
        <div className="underline"></div>
      </div>
      <div className="list-container">
        {saved.map((post) => {
          return (
            <SavedSingle key={post.id} deletePost={deletePost} {...post} />
          );
        })}
      </div>
    </>
  );
};

export default SavedPosts;

import React, { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import PostService from "../Services/PostService";
//import SavedSingle from ".."
import SavedSingle from "../Components/SavedSingle";

const SavedPosts = () => {
  const [load, setLoad] = useState(true);
  const [saved, setSaved] = useState([]);

  const fetchSaved = () => {
    PostService.getPosts().then((res) => {
      //console.log(res.data);
      setSaved(res.data);
      setLoad(false);
    });
  };

  useEffect(() => {
    fetchSaved();
  }, []);

  const deletePost = (id) => {
    //console.log("The id of the post is " + id);
    // const newPosts = saved.filter((single) => single.id !== id);
    // setSaved(newPosts);
    PostService.deletePost(id).then((res) => {
      const newPosts = saved.filter((single) => single.id !== id);
      setSaved(newPosts);
    });
  };

  if (load) {
    return (
      <div className="saved-container">
        <Loading className="saved-loader" />
      </div>
    );
  }

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

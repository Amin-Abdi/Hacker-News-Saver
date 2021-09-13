import React, { useState } from "react";
import Loading from "../Components/Loading";
import PostService from "../Services/PostService";

const SavedPosts = () => {
  const [load, setLoad] = useState(false);
  const [saved, setSaved] = useState([]);

  const fetchSaved = async () => {
    const response = await PostService.getPosts();

    console.log(response.data.hits);
  };

  fetchSaved();

  if (load) {
    return (
      <div className="saved-container">
        <Loading className="saved-loader" />
      </div>
    );
  }

  return (
    <div>
      <h2>Saved Posts</h2>
    </div>
  );
};

export default SavedPosts;

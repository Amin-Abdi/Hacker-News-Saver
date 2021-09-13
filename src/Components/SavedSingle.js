import React from "react";

//This the component rendered for the saved posts page
const SavedSingle = ({
  author,
  num_comments,
  id,
  points,
  title,
  url,
  deletePost,
}) => {
  return (
    <article className="single-post">
      <h4>{title}</h4>
      {/* <h4>{id}</h4> */}
      <p>
        {points} points | {num_comments} comments | <span> By: {author}</span>
      </p>
      <div className="info">
        <a href={url} target="_blank" rel="noopener noreferrer">
          read more
        </a>
        <button className="btn-save" onClick={() => deletePost(id)}>
          Remove
        </button>
      </div>
    </article>
  );
};

export default SavedSingle;

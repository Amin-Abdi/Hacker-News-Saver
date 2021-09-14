import React from "react";

//This the single post component rendered for the saved posts page
const SavedSingle = ({ author, id, points, title, url, deletePost }) => {
  return (
    <article className="single-post">
      <h4>{title}</h4>
      <p>
        {points} points | <span> By: {author}</span>
      </p>
      <div className="info">
        <a href={url} target="_blank" rel="noopener noreferrer">
          read more
        </a>
        <button className="btn-save" onClick={() => deletePost(id)}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default SavedSingle;

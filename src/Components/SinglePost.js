import React from "react";

const SinglePost = ({
  author,
  num_comments,
  objectID,
  points,
  title,
  url,
  savePost,
}) => {
  return (
    <article className="single-post">
      <h4>{title}</h4>
      <p>
        {points} points | {num_comments} comments | <span> By: {author}</span>
      </p>
      <div className="info">
        <a href={url} target="_blank" rel="noopener noreferrer">
          read more
        </a>
        <button className="btn-save" onClick={() => savePost(objectID)}>
          Save
        </button>
      </div>
    </article>
  );
};

export default SinglePost;

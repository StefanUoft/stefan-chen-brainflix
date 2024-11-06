import { useState } from "react";
import CommentItem from "../CommentItem/CommentItem";
import "./Comments.scss";
import MohamMuruge from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/icons/add_comment.svg";

function Comments({ comments }) { 

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      id: Date.now().toString(),
      name: "Current User",
      timestamp: Date.now(),
      comment: event.target.comment.value,
    };

    event.target.reset();

  };

  return (
    <div className="comments">
      <p className="comments__number">
        {`${comments.length} ${comments.length > 1 ? "Comments" : "Comment"}`}
      </p>
      <div className="comments__form-wrapper">
        <img className="comments__avatar" src={MohamMuruge} alt="User Icon" />
        <form className="comments__form" onSubmit={handleCommentSubmit}>
          <label htmlFor="comment" className="comments__label">
            JOIN THE CONVERSATION
          </label>

          <textarea
            id="comment"
            name="comment"
            className="comments__input"
            placeholder="Add a new comment"
          ></textarea>
          <button type="submit" className="comments__button">
            <img
              src={CommentIcon}
              alt="comment icon"
              className="comments__button-icon1"
            />
            COMMENT
            <img
              src={CommentIcon}
              alt="comment icon"
              className="comments__button-icon2"
            />
          </button>
        </form>
      </div>
      <ul className="comments__list">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            name={comment.name}
            timestamp={comment.timestamp}
            comment={comment.comment}
          />
        ))}
      </ul>
    </div>
  );
}

export default Comments;
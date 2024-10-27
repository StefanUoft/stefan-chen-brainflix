import CommentItem from "../CommentItem/CommentItem";
import "./Comments.scss";
import CommentIcon from "../../assets/icons/add_comment.svg";

function Comments({ heroVideo }) {
  const commentNum = heroVideo.comments.length;

  return (
    <div className="comments">
      <p className="comments_number">
        {`${commentNum} ${commentNum > 1 ? "Comments" : "Comment"}`}
      </p>
      <div className="comments__form-wrapper">
        <div className="comments__avatar"></div>
        <form className="comments__form">
          <label htmlFor="comment" className="comments__label">
            Join the Conversation
          </label>
          <textarea
            id="comment"
            name="comment"
            className="comments__input"
            placeholder="Add a new comment"
          ></textarea>
          <button type="submit" className="button button--comment">
            <img
              src={CommentIcon}
              alt="comment icon"
              className="button__icon1"
            />
            Comment
            <img
              src={CommentIcon}
              alt="comment icon"
              className="button__icon2"
            />
          </button>
        </form>
      </div>
      <ul className="comments__list">
        {heroVideo.comments.map((comment) => (
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

import CommentItem from "../CommentItem/CommentItem";
import "./Comments.scss";
import MohamMuruge from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/icons/add_comment.svg";

function Comments({ heroVideo }) {
  const commentNum = heroVideo.comments.length;

  return (
    <div className="comments">
      <p className="comments__number">
        {`${commentNum} ${commentNum > 1 ? "Comments" : "Comment"}`}
      </p>
      <div className="comments__form-wrapper">
        <img className="comments__avatar" src={MohamMuruge} alt="User Icon" />
        <form className="comments__form">
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
              className="comments__button__icon1"
            />
            COMMENT
            <img
              src={CommentIcon}
              alt="comment icon"
              className="comments__button__icon2"
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

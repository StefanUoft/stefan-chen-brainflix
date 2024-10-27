import "./CommentItem.scss";

function CommentItem({ name, timestamp, comment }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <li className="comment">
      <div className="comment__avatar"></div>
      <div className="comment__container">
        <div className="comment__userinfo">
          <p className="comment__name">{name}</p>
          <p className="comment__timestamp">{formatDate(timestamp)}</p>
        </div>
        <p className="comment__info">{comment}</p>
      </div>
    </li>
  );
}

export default CommentItem;

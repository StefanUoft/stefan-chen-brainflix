import "./CommentItem.scss";

function CommentItem ({name, timestamp,comment}){
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
      };

      return(
        <li className="comment">
          <div className="comment__avatar"></div>
          <div className="comment__container">
            <p className="comment__name">{name}</p>
            <p className="comment__timestamp">{formatDate(timestamp)}</p>
            <p className="comment__info">{comment}</p>
          </div>
        </li>

      )
}

export default CommentItem;
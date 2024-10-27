import "./NextVideoItem.scss";

function NextVideoItem({ id, thumbnail, title, channel, handleVideoClick }) {
  return (
    <li className="next-video" onClick={() => handleVideoClick(id)}>
      <div className="next-video__image">
        <img
          src={thumbnail}
          alt={`Video titled ${title}`}
          className="next-video__thumbnail"
        />
      </div>
      <div className="next-video__details">
        <p className="next-video__title">{title}</p>
        <p className="next-video__channel">{channel}</p>
      </div>
    </li>
  );
}

export default NextVideoItem;

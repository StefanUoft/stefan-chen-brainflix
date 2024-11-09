import { Link } from 'react-router-dom';
import './NextVideoItem.scss';

function NextVideoItem({ id, thumbnail, title, channel }) {

  const thumbnailUrl = thumbnail.startsWith("http")
    ? thumbnail 
    : `http://localhost:8080${thumbnail}`; 

  return (
    <li className="next-video">
      <Link to={`/videos/${id}`} className="next-video__link">
        <div className="next-video__image">
          <img
            src={thumbnailUrl}
            alt={`Video titled ${title}`}
            className="next-video__thumbnail"
          />
        </div>
        <div className="next-video__details">
          <p className="next-video__title">{title}</p>
          <p className="next-video__channel">{channel}</p>
        </div>
      </Link>
    </li>
  );
}

export default NextVideoItem;

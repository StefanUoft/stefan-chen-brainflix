import "../HeroVideoDetails/HeroVideoDetails.scss";
import ViewIcon from "../../assets/icons/views.svg";
import LikeIcon from "../../assets/icons/likes.svg";

function HeroVideoDetails({ heroVideo }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="video">
      <h1 className="video__title">{heroVideo.title}</h1>
      <div className="video__container">
        <div className="video__details">
          <p className="video__channel">By {heroVideo.channel}</p>
          <p className="video__timestamp">{formatDate(heroVideo.timestamp)}</p>
        </div>
        <div className="video__metrics">
          <div className="video__metrics__views">
            <img src={ViewIcon} alt="Views Icon" />
            <p>{heroVideo.views}</p>
          </div>
          <div className="video__metrics__likes">
            <img src={LikeIcon} alt="likes Icon" />
            <p>{heroVideo.likes}</p>
          </div>
        </div>
      </div>
      <p className="video__description">{heroVideo.description}</p>
    </div>
  );
}

export default HeroVideoDetails;

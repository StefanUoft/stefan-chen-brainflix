import "./NextVideos.scss";
import { useState } from "react";
import NextVideoItem from "../NextVideoItem/NextVideoItem";
import VideoDetails from "../../data/video-details.json";

function NextVideos({ heroVideo, handleVideoClick }) {
  const [videos] = useState(VideoDetails);

  return (
    <div className="next-videos">
      <h2 className="next-videos__title">NEXT VIDEOS</h2>
      <ul className="next-videos__list">
        {videos
          .filter((video) => video.id !== heroVideo.id)
          .map((video) => {
            return (
              <NextVideoItem
                key={video.id}
                id={video.id}
                thumbnail={video.image}
                title={video.title}
                channel={video.channel}
                handleVideoClick={handleVideoClick}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default NextVideos;
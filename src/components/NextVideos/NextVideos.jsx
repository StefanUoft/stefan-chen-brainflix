import "./NextVideos.scss";
import NextVideoItem from "../NextVideoItem/NextVideoItem";

function NextVideos({ videos, currentVideoId }) {
  return (
    <div className="next-videos">
      <h2 className="next-videos__title">NEXT VIDEOS</h2>
      <ul className="next-videos__list">
        {videos
          .filter((video) => video.id !== currentVideoId) // Exclude the current video
          .map((video) => (
            <NextVideoItem
              key={video.id}
              id={video.id}
              thumbnail={video.image}
              title={video.title}
              channel={video.channel}
            />
          ))}
      </ul>
    </div>
  );
}

export default NextVideos;

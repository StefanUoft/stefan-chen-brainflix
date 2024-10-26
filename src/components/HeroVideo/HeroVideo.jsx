import "./HeroVideo.scss";

function HeroVideo({ heroVideo }) {
  return (
    <div className="hero__container">
      <video
      className="hero__video"
      controls
      src={heroVideo.video}
      poster={heroVideo.image}
      ></video>
    </div>
  );
}

export default HeroVideo;

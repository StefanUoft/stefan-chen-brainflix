import "./HeroVideo.scss";

function HeroVideo({ heroVideo }) {
  const posterUrl = heroVideo.image.startsWith("http")
    ? heroVideo.image
    : `http://localhost:8080${heroVideo.image}`;

  return (
    <div className="hero__container">
      <video
        className="hero__video"
        controls
        src={heroVideo.video}
        poster={posterUrl} 
      ></video>
    </div>
  );
}

export default HeroVideo;

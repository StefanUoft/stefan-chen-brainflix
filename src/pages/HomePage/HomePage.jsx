import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import HeroVideoDetails from "../../components/HeroVideoDetails/HeroVideoDetails";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";
import axios from "axios";

const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const API_KEY = "3da4f5ee-20fd-44ea-a6bb-bff3f5793e97";

function HomePage() {
  const { videoId } = useParams();
  const [videos, setVideos] = useState([]);
  const [heroVideo, setHeroVideo] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/videos?api_key=${API_KEY}`)
      .then((response) => {
        setVideos(response.data);
        if (response.data.length > 0) {
          fetchHeroVideo(response.data[0].id);
        }
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  const fetchHeroVideo = (id) => {
    axios
      .get(`${API_URL}/videos/${id}?api_key=${API_KEY}`)
      .then((response) => setHeroVideo(response.data))
      .catch((error) => console.error("Error fetching video details:", error));
  };

  useEffect(() => {
    if (videoId) {
      fetchHeroVideo(videoId);
    } else if (videos.length > 0) {
      fetchHeroVideo(videos[0].id);
    }
  }, [videoId]);

  if (!heroVideo) return <p>Loading...</p>;

  return (
    <main>
      <HeroVideo heroVideo={heroVideo} />
      <div className="video__content">
        <div className="video__content__info">
          <HeroVideoDetails heroVideo={heroVideo} />
          <Comments heroVideo={heroVideo} />
        </div>
        <NextVideos videos={videos} currentVideoId={heroVideo.id} />
      </div>
    </main>
  );
}

export default HomePage;

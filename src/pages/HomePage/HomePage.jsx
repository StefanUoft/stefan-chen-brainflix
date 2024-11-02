import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import HeroVideo from '../../components/HeroVideo/HeroVideo';
import HeroVideoDetails from '../../components/HeroVideoDetails/HeroVideoDetails';
import Comments from '../../components/Comments/Comments';
import NextVideos from '../../components/NextVideos/NextVideos';


function HomePage({ videos, heroVideo, fetchHeroVideo }) {
  const { videoId } = useParams();

  useEffect(() => {
    if (videoId) {
      fetchHeroVideo(videoId);
    } else if (videos.length > 0) {
      fetchHeroVideo(videos[0].id); 
    }
  }, [videoId, videos, fetchHeroVideo]);

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
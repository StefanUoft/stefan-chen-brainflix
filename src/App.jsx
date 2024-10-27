import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import HeroVideo from './components/HeroVideo/HeroVideo'
import HeroVideoDetails from './components/HeroVideoDetails/HeroVideoDetails'
import VideoDetails from './data/video-details.json'
import Comments from './components/Comments/Comments'
import NextVideos from './components/NextVideos/NextVideos'

function App() {
  const [videos] =useState(VideoDetails);
  const [heroVideo, setHeroVideo] = useState (VideoDetails[0]);

  const handleVideoClick = (id) => {
    const clickedVideo = videos.find((video) => {
      return video.id === id;
    });
    setHeroVideo(clickedVideo);
  };

  return (
    <>
     <Header />
     <main>
      <HeroVideo heroVideo={heroVideo}/>
      <div className='video__content'>
        <div className='video__content__info'>
          <HeroVideoDetails heroVideo={heroVideo} />
          <Comments heroVideo={heroVideo} />
        </div>
        <NextVideos heroVideo={heroVideo} handleVideoClick={handleVideoClick}/>

      </div>
     </main>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import HeroVideo from './components/HeroVideo/HeroVideo'
import HeroVideoDetails from './components/HeroVideoDetails/HeroVideoDetails'
import VideoDetails from './data/video-details.json'


function App() {
  const [videos] =useState(VideoDetails);
  const [heroVideo, setHeroVideo] = useState (VideoDetails[0]);

  // const handleVideoClick = (id) => {
  //   const clickedVideo = videos.find((video) => {
  //     return video.id === id;
  //   });
  //   setHeroVideo(clickedVideo);
  // };

  return (
    <>
     <Header />
     <main>
      <HeroVideo heroVideo={heroVideo}/>
      <div className='video__content'>
        <div>
          <HeroVideoDetails heroVideo={heroVideo} />

        </div>

      </div>
     </main>
    </>
  )
}

export default App

import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import axios from 'axios';

const API_URL = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
const API_KEY = '3da4f5ee-20fd-44ea-a6bb-bff3f5793e97';

function App() {
  const [videos, setVideos] = useState([]);
  const [heroVideo, setHeroVideo] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/videos?api_key=${API_KEY}`)
      .then((response) => {
        setVideos(response.data);

        if (response.data.length > 0) {
          fetchHeroVideo(response.data[0].id);
        }
      })
      .catch((error) => console.error('Error fetching videos:', error));
  }, []);

  const fetchHeroVideo = (videoId) => {
    
    axios.get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`)
      .then((response) => setHeroVideo(response.data))
      .catch((error) => console.error('Error fetching video details:', error));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={<HomePage videos={videos} heroVideo={heroVideo} fetchHeroVideo={fetchHeroVideo} />} 
        />
        <Route 
          path="/video/:videoId" 
          element={<HomePage videos={videos} heroVideo={heroVideo} fetchHeroVideo={fetchHeroVideo} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

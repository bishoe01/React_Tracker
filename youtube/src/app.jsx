import { useEffect, useState } from 'react';
import './app.css';
import Header from './components/header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDBQGxHj3x3XkCYaNQgvvgzIqDulJjY_cI", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);
  console.log(videos);
  return (
    <>
    <Header/>
    <VideoList videos={videos} />
    </>
  );
}

export default App;

import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyDBQGxHj3x3XkCYaNQgvvgzIqDulJjY_cI`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item , id : item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDBQGxHj3x3XkCYaNQgvvgzIqDulJjY_cI", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);





  return (
    <div className={styles.app}>
      <Header onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;

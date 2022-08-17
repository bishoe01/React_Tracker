import { useEffect, useState } from 'react';
import './app.css';
import Header from './components/header';

function App() {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDBQGxHj3x3XkCYaNQgvvgzIqDulJjY_cI", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  },[]);
  return (
    <>
    <Header/>
    <h1>Hello :)</h1>
    </>
  );
}

export default App;

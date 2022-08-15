import { useState } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

function App() {
  const [habitarr, setHabitarr] = useState(
    [
    {id : 0 , name : "Reading" , count : 0 },
    {id : 1 , name : "Coding" , count : 0 },
    {id : 2 , name : "Movie" , count : 0 },
  ]);
  const handleplus = (id) => {
    let copy = [...habitarr];
    copy[id].count +=1;
    setHabitarr(copy);
  }
  const handleminus = (id) => {
    let copy = [...habitarr];
    let cnt = copy[id].count -=1;
    copy[id].count = cnt < 0 ? 0 : cnt;
    setHabitarr(copy);
  };

  const handledelete = (id) => {
    let copy = [...habitarr].filter(item => id !== item.id);
    setHabitarr(copy);
  };
  return (
    <>
    <Navbar habitarr={habitarr}/>
    <Habits 
    habitarr={habitarr}
    handleplus={handleplus}
    handleminus={handleminus}
    handledelete={handledelete}
    />
    </>
  );
}

export default App;

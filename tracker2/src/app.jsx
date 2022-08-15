import { useState } from 'react';
import './app.css';
import HabitAddForm from './components/habitAddForm';
import Habits from './components/habits';
import Navbar from './components/navbar';

function App() {
  const [habitarr, setHabitarr] = useState(
    [
    {id : 0 , name : "Reading" , count : 0 },
    {id : 1 , name : "Coding" , count : 0 },
    {id : 2 , name : "Movie" , count : 0 },
  ]);
  const handleplus = (habit) => {
    const copy = habitarr.map(item => {
      if(item.id === habit.id){
        return {...habit , count:habit.count+1};
      }
      return item;
    })
    setHabitarr(copy);
  }
  const handleminus = (habit) => {
    const copy = habitarr.map(item => {
      if(item.id === habit.id){
        const cnt = habit.count -1 ;
        return {...habit , count:cnt < 0 ? 0 : cnt};
    }
    return item;
  });
  setHabitarr(copy);
}

  const handledelete = (habit) => {
    let copy = habitarr.filter(item => habit.id !== item.id);
    setHabitarr(copy);
  };

  const handleAdd = (value) => {
    let copy = [...habitarr , {id : Date.now() , name : value , count : 0 }];
    setHabitarr(copy);
  }
  return (
    <>
    <Navbar habitarr={habitarr}/>
    <HabitAddForm
    handleAdd={handleAdd}></HabitAddForm>
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

import { Routes,Route } from 'react-router-dom';
import styles from './app.module.css';
import Maker from './components/home/maker';
import Login from './components/login/login';

function App({authService}) {
  return (
    <div className={styles.app}>
    
    
    <Routes>
      <Route path='/' exact element={<Login authService={authService}/>} ></Route>
      <Route path='/maker' element={<Maker authService={authService}/>}></Route>
    </Routes>
    </div>
  );
}

export default App;

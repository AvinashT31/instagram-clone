import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';
import Homapage from './component/Homepage';
import Addpost from './component/Addpost';
import Addstory from './component/Addstory';
import Profile from './component/Profile';
import ReducerB from './Reducer.js/ReducerB'

function App() {
  return (
    <div className="App">
      {/* <Homapage/> */}
      <Routes>
      <Route exact path='/homepage' element={<Homapage/>} />
      <Route exact path='/signup' element={<Signup/>} />
      <Route exact path='/' element={<Login/>} />
      <Route exact path='/addpost' element={<Addpost/>} />
      <Route exact path='/profile' element={<Profile/>} />
      <Route exact path='/addstory' element={<Addstory/>} />
      <Route exact path='/reduce' element={<ReducerB/>} />
     </Routes>
    </div>
  );
}

export default App;

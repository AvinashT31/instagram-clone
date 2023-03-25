import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homapage from './component/Homepage';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      {/* <Homapage/> */}
      <Routes>
      <Route exact path='/' element={<Homapage/>} />
      <Route exact path='/login' element={<Login/>} />


      </Routes>
    </div>
  );
}

export default App;


import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
        <nav>
          <Link to ="/">Home</Link>
          <Link to ="/profile">Profile</Link>
        </nav>
        <Routes>
          <Route path = "/"element={<Home></Home>}></Route>
          <Route path = "/home"element={<Home></Home>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

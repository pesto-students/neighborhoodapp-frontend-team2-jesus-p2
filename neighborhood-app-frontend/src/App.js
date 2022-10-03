import logo from './logo.svg';
import './App.css';
import Auth from './pages/Auth/Auth'
import Post from './pages/Post/Post';
import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/posts" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

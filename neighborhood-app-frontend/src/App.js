import logo from './logo.svg';
import './App.css';
import Auth from './pages/Auth/Auth'
import Sidebar from './common/Sidebar/Sidebar';
import Footer from './common/Footer';
import Post from './pages/Post/Post';
import Header from './common/Header'


function App() {
  return (
    <div className="App">
      <Header />
      <Post /> 
      <Auth />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;

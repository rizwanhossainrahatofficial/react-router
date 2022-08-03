import logo from './logo.svg';
import './App.css';


import Home from './components/Home/Home';
import Friend from './components/Friends/Friends';
import About from './components/About/About';
import Error from './components/Error/Error';
import { BrowserRouter as Router,Route, Routes,Link } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
    
      <Router>
        <Header></Header>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/friend/:friendId" element={<FriendDetail />} />
        <Route exact path="/post/:postId" element={<PostDetail />} />
        <Route exact path="/friends" element={<Friends />} />
        <Route exact path="/about" element={<About />} />\
        <Route exact path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

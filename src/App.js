
import './App.css';
import Favorites from './Favorites';
// Example in index.js or App.js
import './tailwind.css';
//import SearchPage from './SearchPage';
import Navbar from './Navbar';
import ArticleDetails from './ArticleDetails';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
//import Profile from './Profile';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <div className="Content">
      <Routes>
      <Route path="/" element={<ArticleDetails />} />
        <Route path="/favorites" element={< Favorites/>} />
      </Routes> 
    </div>
    </div>
    </Router>
  );
}

export default App;

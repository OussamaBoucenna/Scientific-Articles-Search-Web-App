
import React from 'react';
//import Navbar from './Navbar';
//import ArticleComponents from './moderator/ArticleComponents';
//import AdminPage from './admin/AdminPage';
//import UserPage from './notToUse/UserPage';
//import ModeratorComponent from './admin/ModeratorComponent';
//import SearchBar from './SearchBar';
import ModPage from './moderator/ModPage';
import Navbar from './Navbar';
import ArticleList from './moderator/ArticleList';
import ModDetailsPage from './moderator/ModDetailsPage'
import AuthorComponents from './moderator/AuthorComponents';


function App() {
  return (
    <div className="">
      <ModPage NOM="kaba" Prenom="oumayma" />
    </div>
  );
}

export default App;
  // <Router>
    //   <Routes>
    //     <Route path="/" element={<AdminPage />} />
    //     {/* Ajoutez d'autres routes ici */}
    //     <Route path="/UserPage" element={<UserPage/>}/>
    //     <Route path="/UserPage" element={<UserPage/>}/>
    //     <Route path="/UserPage" element={<UserPage/>}/>
    //     <Route path="/UserPage" element={<UserPage/>}/>
    //   </Routes>
    // </Router>

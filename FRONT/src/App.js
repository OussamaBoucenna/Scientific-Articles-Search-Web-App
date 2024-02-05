import AdminPage from './pages/admin/Home/AdminPage';
import './index.css'
import { BrowserRouter as Router , Route , Routes, Navigate } from 'react-router-dom';
import EditListPage from './pages/admin/EditMod/EditListPage';
import EditModPage from './pages/admin/EditMod/EditModPage';
import DeletePage from './pages/admin/DeleteMod/DeletePage';
import ModeratorListDelete from './pages/admin/DeleteMod/ModeratorListDelete';
import AddModPage from './pages/admin/AddMod/AddMod';
import UploadPage from './pages/admin/Upload/UploadPage';
import SignIn from './pages/signeIn';
import ModPage from './pages/moderator/ModPage';
import ModDetailsPage from './pages/moderator/ModDetailsPage';
import Profile from './pages/User/Profile';
import ArticleDetails from './pages/User/ArticleDetails/ArticleDetails';
import SearchPage from './pages/User/SearchPage';
import Favorites from './pages/User/Favorites';
import SignUp from './pages/signeUp';

function App() {
  return (
     <Router>
      <Routes>
         {/* signeIn and signeUp  */}
         <Route path="/signIn" element ={<SignIn/>} />
         <Route path="/signUp" element ={<SignUp/>} />
        
          {/* admin route  */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/AddMod" element={<AddModPage />} />
          <Route path="/admin/DeletePage" element={<DeletePage />} />
          <Route path="/admin/ListEdit" element={<EditListPage />} />
          <Route path="/admin/Upload" element={<UploadPage />} />
          <Route path="/admin/EditModPage/:id" element={<EditModPage/>}/>
          <Route path="/admin/ListDelete" element={<ModeratorListDelete/>}/>
         {/* moderator route  */}
         <Route path="/moderator" element={<ModPage/>}/>
         <Route path="/moderator/ArticleComponents/:id" element={<ModDetailsPage/>} />
         <Route path="/" element={<Navigate to="/signIn" />} />
         {/* user route  */}
         <Route path="/user" element={<Profile/>}/>
         <Route path="/user/ArticleDetails/:id" element={<ArticleDetails/>} />
         <Route path="/user/SearchPage" element={<SearchPage/>} />
         <Route path="/user/favorites" element={<Favorites/>} />
         
      </Routes>
     </Router>
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




// import './App.css';
// import SignIn from './pages/signeIn/index.jsx' ; 
// import ForgetPassword from './pages/forgotPassword/index.jsx'
// import NewPassword from './pages/newPasword/index.jsx';
// import SignUp from './pages/signeUp/index.jsx';
// function App() {
//   return (
//     <div className="App">
//       <SignUp/>
//       {/* <SignIn/>      */}
//       {/* <ForgetPassword/> */}
//       {/* <NewPassword/> */}
//     </div>
//   );
// }

// export default App;




 // <div className=""> 
    //   <Router>
    //   <Routes>
    //       <Route path="/" element ={<SignIn/>} />
    //      {/* Ajoutez d'autres routes ici */}
    //      <Route path="/admin/EditModPage/:id" element={<EditModPage/>}/>
    //      <Route path="/admin/ListDelete" element={<ModeratorListDelete/>}/>
    //   </Routes>
    //   </Router>
    // </div>
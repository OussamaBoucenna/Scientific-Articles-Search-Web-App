import './App.css';
import SignIn from './pages/signeIn/index.jsx' ; 
import ForgetPassword from './pages/forgotPassword/index.jsx'
import NewPassword from './pages/newPasword/index.jsx';
import SignUp from './pages/signeUp/index.jsx';
function App() {
  return (
    <div className="App">
      <SignUp/>
      {/* <SignIn/>      */}
      {/* <ForgetPassword/> */}
      {/* <NewPassword/> */}
    </div>
  );
}

export default App;

import {React ,useState}from 'react';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import AdminPage from './components/AdminPage/AdmnPage';
import ProtectedRoute from './components/Login/ProtectedRoute';
import Home from './components/Home/Home';


// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   return (
//     <div className="App">
//       <Navbar />
//       <Menu />
//       <Contact />
//       {/* <Router> */}
//       {/* <Route
//           path="/login"
//           render={(props) => <Login {...props} setLoggedIn={setLoggedIn} />}
//         />
//         <ProtectedRoute
//           path="/admin"
//           component={AdminPage}
//           loggedIn={loggedIn}
//         />
//        </Router> */}
//     </div>
//   );
// }
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
    <div>
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
        <h1>Welcome! You are logged in.</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes></>
      )}
    </div>
    </Router>
  );
};
export default App;

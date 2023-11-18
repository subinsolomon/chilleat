import {React ,useState}from 'react';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import AdminPage from './components/AdminPage/AdmnPage';
import ProtectedRoute from './components/Login/ProtectedRoute';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Contact />
      {/* <Router> */}
      {/* <Route
          path="/login"
          render={(props) => <Login {...props} setLoggedIn={setLoggedIn} />}
        />
        <ProtectedRoute
          path="/admin"
          component={AdminPage}
          loggedIn={loggedIn}
        />
       </Router> */}
    </div>
  );
}

export default App;

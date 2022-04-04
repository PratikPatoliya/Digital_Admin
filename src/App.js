import './App.css';
import Login from './Components/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState , useEffect} from 'react';
import PrivateRoute from './Components/PrivateRoute';
import Home from './Components/Home';
import DashboardPage from './DashboardPage/DashboardPage';
import Logout from './Components/Logout';
import Category from './Components/Category/Category';



function App() {
  const [loginStatus,setLoginStatus] = useState(false)

  useEffect(() => {
    const status = JSON.parse(localStorage.getItem("Login"))
    if(status){
      setLoginStatus(true)
    }else{
      setLoginStatus(false)
    }
  }, []);
 
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          {/* {loginStatus ? <Route path="/login" element={<Home />} /> : <Route path="/login" element={<Login />} />} */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
           <Route
            path="/category"
            element={
              <PrivateRoute>
                <Category />
              </PrivateRoute>
            }
          />

          
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
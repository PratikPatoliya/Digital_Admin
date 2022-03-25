import './App.css';
import Login from './Components/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './Components/Register';
import Home from './Components/Home';
import DashboardPage from './Components/DashboardPage';


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          <Route
        path="/dashboard"
        element={<DashboardPage />}
      />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
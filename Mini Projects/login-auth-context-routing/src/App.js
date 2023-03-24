import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './utils/auth';
import RequireAuth from './utils/RequireAuth';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Login from './components/Login';
import Profile from './components/Profile';


function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
      </Routes>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;

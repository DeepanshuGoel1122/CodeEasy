import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../utils/auth";

const Login = () => {

  const [user, setUser] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || '/';

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true })
  }
  return (
    <div className="login">
      <div className="container">
        <div className="inputBox">
          <input type='text' onChange={(e) => setUser(e.target.value)} placeholder='Username' />
        </div>

        <button className="loginBtn" onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default Login
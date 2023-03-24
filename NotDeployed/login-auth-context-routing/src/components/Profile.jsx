import { useAuth } from "../utils/auth"
import { useNavigate } from "react-router-dom";

const Profile = () => {
const auth = useAuth();
const navigate = useNavigate();

const handleLogout = () => {
  auth.logout();
  navigate('/');
}

  return (
    <div className="profile">
    <div className="container">
    <h1>Welcome, <span>{auth.user}</span></h1>
    
      <button className="logoutBtn" onClick={handleLogout}>Logout</button>
    </div>
      
    </div>
  )
}

export default Profile
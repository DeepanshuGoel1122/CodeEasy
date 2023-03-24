import { NavLink } from 'react-router-dom';
import { useAuth } from '../utils/auth';

import '../App.css';

const Navbar = () => {
    const auth = useAuth();
    return (
            <nav className='navBar'>
                <div className='navLinks'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                {!auth.user && (
                    <NavLink to='login'>Login</NavLink>
                )}
                </div>
                {auth.user && (
                    <div className="name">{auth.user}</div>
                )} 
                
            </nav>
    )
}

export default Navbar
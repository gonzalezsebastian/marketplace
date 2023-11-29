import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from "react-router-dom";
import '../styles/Login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false);

  const handleLogin = (type) => {
    login(type);
    setRedirect(true);
  };

  return (
    <div className="login-container">
        <div className="login-left">
            <img src='/login.jpeg' alt='login' />
        </div>
        <div className="login-right">
            <div className='login-title'>
                <h1>Marketplace</h1>
                <h2>Presentado por:</h2>
                <h3>Sebastian Enrique González Benítez</h3>
                <h3>Raúl José López Grau</h3>
            </div>
            <div className="login-buttons">
                <Link to='/home' onClick={() => handleLogin('admin')}>
                    <button>Login as Admin</button>
                </Link>
                <Link to='/home' onClick={() => handleLogin('user')}>
                    <button>Login as User</button>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Login;
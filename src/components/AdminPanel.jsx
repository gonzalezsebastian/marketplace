import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import '../styles/AdminPanel.css'

const AdminPanel = () => {
  const { loginAsAdmin, logout } = useContext(AuthContext);

  return (
    <div className='admin'>
      <h2>Admin Panel</h2>
      <div className='adminButtons'>
        <button onClick={loginAsAdmin}>Login as Admin</button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default AdminPanel;
import { Link } from 'react-router-dom';
import '../styles/AdminPanel.css'

const AdminPanel = () => {

  return (
    <div className='admin'>
      <div className='adminButtons'>
        <Link to='/'>
          <button>Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPanel;
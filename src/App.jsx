import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import AdminPanel from './components/AdminPanel';
import './styles/App.css';


const App = () => {
  return (
    <div className='app'>
      <AuthProvider>
        <AdminPanel />
        <Home />
      </AuthProvider>
    </div>
  );
};

export default App;
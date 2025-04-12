import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth); // adjust if using a different structure

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4 shadow-md">
      <div className="flex space-x-4">
        {user && (
          <>
            <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
            <Link to="/create" className="hover:text-yellow-300">Create Link</Link>
          </>
        )}
      </div>
      <div>
        {user ? (
          <button onClick={handleLogout} className="bg-red-500 px-4 py-1 rounded hover:bg-red-600">
            Logout
          </button>
        ) : (
          <>
            <Link to="/" className="mr-4 hover:text-yellow-300">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

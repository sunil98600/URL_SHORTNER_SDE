import {Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './features/auth/authSlice';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateLink from './pages/CreateLink';
import PrivateRoute from './routes/PrivateRouter';
import Navbar from './components/Navbar';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch({ type: 'auth/setUserFromToken', payload: token });
    }
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/create" element={<PrivateRoute><CreateLink /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
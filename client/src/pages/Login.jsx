import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('intern@dacoid.com');
  const [password, setPassword] = useState('Test123');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) navigate('/dashboard');
  }, [token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto mt-20">
      <h2 className="text-2xl font-bold">Login</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border" />
      {error && <p className="text-red-500">{error}</p>}
      <button className="bg-blue-500 text-white px-4 py-2">Login</button>
    </form>
  );
}   
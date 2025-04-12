import API from '../../utils/api';

const login = async (data) => {
  const res = await API.post('/auth/login', data);
  localStorage.setItem('token', res.data.token);
  return res.data;
};

export default { login };

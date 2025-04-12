import API from '../../utils/api';

const getLinks = async () => {
  const res = await API.get('/links');
  return res.data;
};

const createLink = async (data) => {
  const res = await API.post('/links', data);
  return res.data;
};

const getAnalytics = async (id) => {
  const res = await API.get(`/links/${id}/analytics`);
  return res.data;
};

export default { getLinks, createLink, getAnalytics };
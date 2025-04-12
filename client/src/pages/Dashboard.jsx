import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLinks, fetchAnalytics } from '../features/links/linkSLice';
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import {QRCodeSVG} from 'qrcode.react';
import API from '../utils/api';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F'];

export default function Dashboard() {
  const dispatch = useDispatch();
  const { links, analytics } = useSelector((state) => state.links);

  useEffect(() => {
    dispatch(fetchLinks());
  }, [dispatch]);

  const loadAnalytics = (id) => dispatch(fetchAnalytics(id));

  const handleRedirect = async (shortId) => {
    try {
      window.open(`${API.defaults.baseURL.replace('/api', '')}/${shortId}`, '_blank');
    } catch (error) {
      console.error('Redirect error:', error);
    }
  };

  // Format data for charts
  const clickData = analytics.map(a => ({
    name: new Date(a.timestamp).toLocaleDateString(),
    count: 1,
  }));

  const browserData = Object.entries(
    analytics.reduce((acc, a) => {
      const browser = a.browser || 'Unknown';
      acc[browser] = (acc[browser] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Links</h2>
      
      <table className="w-full text-left border mb-6">
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
            <th>Total Clicks</th>
            <th>Created Date</th>
            <th>Expiration</th>
            <th>Analytics</th>
            <th>QR CODE</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link) => {
            const clickCount = analytics.filter(a => a.linkId === link._id).length;
            return (
              <tr key={link._id} >
                <td>
                  <a href={link.originalUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    {link.originalUrl}
                  </a>
                </td>
                <td>
                  <button onClick={() => handleRedirect(link.shortId)} className="text-blue-500 underline">
                    {link.customAlias || link.shortId}
                  </button>
                </td>
                <td>{clickCount}</td>
                <td>{new Date(link.createdAt).toLocaleDateString()}</td>
                <td>{link.expiresAt ? new Date(link.expiresAt).toLocaleDateString() : 'No Expiry'}</td>
                <td>
                  <button onClick={() => loadAnalytics(link._id)} className="text-sm bg-gray-200 px-2 py-1 rounded">
                    View
                  </button>
                </td>
                <td>
  <div className="p-2"> 
    <QRCodeSVG value={`${API.defaults.baseURL.replace('/api', '')}/${link.customAlias || link.shortId}`} />
  </div>
</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2">Clicks Over Time</h3>
      <LineChart width={600} height={250} data={clickData}>
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
      </LineChart>

      <h3 className="text-lg font-semibold mt-8 mb-2">Browser Breakdown</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={browserData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {browserData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}


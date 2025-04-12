import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createLink } from '../features/links/linkSLice';

export default function CreateLink() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createLink({ originalUrl, customAlias, expirationDate }))
      .then(() => {
        setSuccessMessage('Your link has been created successfully!'); // Set success message after link creation
        // Reset form fields
        setOriginalUrl('');
        setCustomAlias('');
        setExpirationDate('');
      })
      .catch((error) => {
        console.error('Error creating link:', error);
        setSuccessMessage('Failed to create link. Please try again.');
      });
  };

  return (
    <div>
      {successMessage && (
        <div className="p-2 mb-4 text-green-700 bg-green-100 rounded">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4">
        <input
          placeholder="Original URL"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          className="p-2 border"
        />
        <input
          placeholder="Custom Alias"
          value={customAlias}
          onChange={(e) => setCustomAlias(e.target.value)}
          className="p-2 border"
        />
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          className="p-2 border"
        />
        <button className="bg-green-500 text-white p-2">Create Link</button>
      </form>
    </div>
  );
}

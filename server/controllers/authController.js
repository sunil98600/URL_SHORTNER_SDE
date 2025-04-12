const jwt = require('jsonwebtoken');

const login = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  if (email === 'intern@dacoid.com' && password === 'Test123') {
    // Static user info, no need for user._id
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return res.json({ user: { email }, token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};
module.exports = { login };
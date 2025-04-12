const express = require('express');
const router = express.Router();
const { createLink, getLinks, getAnalytics } = require('../controllers/linkController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);
router.post('/', createLink);
router.get('/', getLinks);
router.get('/:id/analytics', getAnalytics);

module.exports = router;
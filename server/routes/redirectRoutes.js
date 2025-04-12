const express = require('express');
const router = express.Router();
const { redirectToOriginal } = require('../controllers/redirectController');

router.get('/:shortId', redirectToOriginal);

module.exports = router;
const ua = require('ua-parser-js');

module.exports = (userAgent) => ua(userAgent);
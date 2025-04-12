const Link = require('../models/link');
const Click = require('../models/click');
const ua = require('ua-parser-js');

const redirectToOriginal = async (req, res) => {
  const link = await Link.findOne({ shortId: req.params.shortId });

  if (!link || (link.expirationDate && new Date(link.expirationDate) < new Date())) {
    return res.status(404).send('Link not found or expired');
  }

  const uaResult = ua(req.headers['user-agent']);

  const click = new Click({
    linkId: link._id,
    timestamp: new Date(),
    ip: req.ip,
    device: uaResult.device.type || 'desktop',
    os: uaResult.os.name,
    browser: uaResult.browser.name
  });
  
  link.clicks += 1;

  click.save();

  res.redirect(link.originalUrl);
};

module.exports = { redirectToOriginal };
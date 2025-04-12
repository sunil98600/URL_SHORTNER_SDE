const Link = require('../models/link');
const Click = require('../models/click');
const { nanoid } = require('nanoid');

const createLink = async (req, res) => {
  const { originalUrl, customAlias, expirationDate } = req.body;
  const shortId = customAlias || nanoid(6);

  const newLink = new Link({
    userId: req.userId,
    originalUrl,
    shortId,
    customAlias,
    expirationDate
  });

  await newLink.save();
  res.json(newLink);
};

const getLinks = async (req, res) => {
  const links = await Link.find({ userId: req.userId });
  res.json(links);
};

const getAnalytics = async (req, res) => {
  const clicks = await Click.find({ linkId: req.params.id });
  res.json(clicks);
};

module.exports = { createLink, getLinks, getAnalytics };

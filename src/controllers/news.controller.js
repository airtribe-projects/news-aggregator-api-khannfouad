const { getPersonalizedNews } = require("../services/newsService");

const getNews = async (req, res) => {
  const news = await getPersonalizedNews(req.user.preferences);
  res.status(200).json({ news });
};

module.exports = { getNews };

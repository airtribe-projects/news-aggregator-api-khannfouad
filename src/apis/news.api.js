const axios = require("axios");

const getPersonalizedNews = async (preferences) => {
  if (!preferences || preferences.length === 0) return [];

  const query = preferences.join(",");

  try {
    const response = await axios.get("https://api.gnews.io/v4/top-headlines", {
      params: {
        token: process.env.NEWS_API_KEY,
        topic: query,
        lang: "en",
        country: "us",
        max: 10,
      },
    });
    return response.data.articles || [];
  } catch (error) {
    return [];
  }
};

module.exports = { getPersonalizedNews };

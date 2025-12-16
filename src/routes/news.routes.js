const express = require("express");
const { protect } = require("../middleware/auth");
const { getNews } = require("../controllers/newsController");

const router = express.Router();

router.use(protect);
router.get("/", getNews);

module.exports = router;

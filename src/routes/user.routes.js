const express = require("express");
const { protect } = require("../middleware/auth");
const {
  getPreferences,
  updatePreferences,
} = require("../controllers/userController");

const router = express.Router();

router.use(protect);

router.route("/preferences").get(getPreferences).put(updatePreferences);

module.exports = router;

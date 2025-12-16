const getPreferences = (req, res) => {
  res.status(200).json({
    preferences: req.user.preferences,
  });
};

const updatePreferences = (req, res) => {
  const { preferences } = req.body;

  if (!Array.isArray(preferences)) {
    return res.status(400).json({
      status: "fail",
      message: "Preferences must be an array",
    });
  }

  req.user.preferences = preferences;

  res.status(200).json({
    status: "success",
    message: "Preferences updated successfully",
  });
};

module.exports = { getPreferences, updatePreferences };

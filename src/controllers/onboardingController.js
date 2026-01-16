const supabase = require("../config/supabase");

const getOnboardingStats = async (req, res) => {
  const { data, error } = await supabase
    .from("onboarding_progress")
    .select("*")
    .order("week");

  if (error) return res.status(500).json(error);
  res.json(data);
};

module.exports = getOnboardingStats;

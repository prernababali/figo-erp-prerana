const supabase = require("../config/supabase");

const getRecruitmentPipeline = async (req, res) => {
  const { data, error } = await supabase
    .from("recruitment_pipeline")
    .select("*")
    .order("date");

  if (error) return res.status(500).json(error);
  res.json(data);
};

module.exports = getRecruitmentPipeline;

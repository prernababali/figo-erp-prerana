const supabase = require("../config/supabase");

exports.getRecentCandidates = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("candidates")
      .select("*")
      .order("applied_date", { ascending: false })
      .limit(5);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

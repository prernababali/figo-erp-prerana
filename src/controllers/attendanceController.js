const supabase = require("../config/supabase");

exports.getLiveAttendanceStats = async (req, res) => {
  const { data, error } = await supabase
    .from("attendance")
    .select("*")
    .order("timestamp", { ascending: false });

  if (error) return res.status(500).json(error);
  res.json(data);
};

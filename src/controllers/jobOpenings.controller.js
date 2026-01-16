const supabase = require("../config/supabase");


exports.createJobOpening = async (req, res) => {
  try {
    const userId = req.user.id; // from auth middleware

    const {
      title,
      department,
      location,
      employment_type,
      min_experience,
      max_experience,
      positions,
      min_salary,
      max_salary,
      description,
      responsibilities,
      qualifications,
      skills,
      visibility
    } = req.body;

    const { data, error } = await supabase
      .from("job_openingss")
      .insert([
        {
          title,
          department,
          location,
          employment_type,
          min_experience,
          max_experience,
          positions,
          min_salary,
          max_salary,
          description,
          responsibilities,
          qualifications,
          skills,
          visibility,
          status: "DRAFT",
          created_by: userId
        }
      ])
      .select()
      .single();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json({
      message: "Job opening created as draft",
      job: data
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listJobOpenings = async (req, res) => {
  try {
    const {
      department,
      status,
      employment_type,
      page = 1,
      limit = 10,
      sort = "created_at"
    } = req.query;

    const from = (page - 1) * limit;
    const to = from + Number(limit) - 1;

    let query = supabase
      .from("job_openingss")
      .select("*", { count: "exact" });

    // 🔹 Dynamic filters (UI dropdowns)
    if (department) query = query.eq("department", department);
    if (status) query = query.eq("status", status);
    if (employment_type) query = query.eq("employment_type", employment_type);

    // 🔹 Time-series sorting
    query = query.order(sort, { ascending: false });

    // 🔹 Pagination
    query = query.range(from, to);

    const { data, count, error } = await query;

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({
      page: Number(page),
      limit: Number(limit),
      total: count,
      jobs: data
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

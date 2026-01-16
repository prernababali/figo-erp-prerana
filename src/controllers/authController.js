const supabase = require("../config/supabase");
const jwt = require("jsonwebtoken");

if (!process.env.JWT_SECRET) {
    console.error("Missing JWT_SECRET in env");
    process.exit(1);
}


const signupUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: false, 
      user_metadata: { role: role || "user" },
    });

    if (error) return res.status(400).json({ error: error.message });

    res.json({
      message: "User created successfully. Verification email sent.",
      user: data.user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};



const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return res.status(400).json({ error: error.message });

    const role = data.user.user_metadata?.role || "user";

    // Generate JWT
    const token = jwt.sign(
      { id: data.user.id, email: data.user.email, role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", user: data.user, role, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};


const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/reset-password",
    });

    if (error) return res.status(400).json({ error: error.message });

    res.json({
      message: "Password reset email sent successfully",
      data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};



module.exports = {
  signupUser,
  loginUser,
  forgotPassword,
};

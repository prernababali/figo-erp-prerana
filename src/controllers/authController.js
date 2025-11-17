const supabase = require("../config/supabase");
const jwt = require("jsonwebtoken");

if (!process.env.JWT_SECRET) {
    console.error("Missing JWT_SECRET in env");
    process.exit(1);
}

const signupUser = async (req, res) => {
  const { email, password,role } = req.body;

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { role: role || "user" },
  });

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "User created successfully", user: data.user });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });
 
  const role = data.user.user_metadata?.role || "user";
  // generate custom JWt token
  const token = jwt.sign(
    { id: data.user.id, email: data.user.email, role: role  },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ message: "Login successful", user: data.user,role:role, token });
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:5173/reset-password",
  });

  if (error) {
    console.error("Forgot password error:", error.message);
    return res.status(400).json({ error: error.message });
  }

  res.json({ message: "Password reset email sent successfully", data });
};

const resetPassword = async (req, res) => {
  const { email, new_password } = req.body;

  try {
    const { data, error } = await supabase.auth.admin.listUsers({
      filter: `email=eq.${email}`,
    });

    if (error) throw error;
    if (!data || !data.users || data.users.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user_id = data.users[0].id;

    const { data: updatedUser, error: updateError } = await supabase.auth.admin.updateUserById(user_id, {
      password: new_password,
    });

    if (updateError) throw updateError;

    res.json({ message: "Password reset successfully", user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  signupUser,
  loginUser,
  forgotPassword,
  resetPassword
};

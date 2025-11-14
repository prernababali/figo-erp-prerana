const supabase = require("../config/supabase");
const jwt = require("jsonwebtoken");

if (!process.env.JWT_SECRET) {
    console.error("Missing JWT_SECRET in env");
    process.exit(1);
}

const signupUser = async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
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

  // generate custom JWt token
  const token = jwt.sign(
    { id: data.user.id, email: data.user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ message: "Login successful", user: data.user, token });
};

module.exports = { signupUser, loginUser };

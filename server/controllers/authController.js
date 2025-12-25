const db = require("../config/db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await db.query("SELECT * FROM admins WHERE username = $1", [
      username,
    ]);

    if (result.rows.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "Username tidak ditemukan" });
    }

    const admin = result.rows[0];

    if (password !== admin.password) {
      return res
        .status(401)
        .json({ success: false, message: "Password salah!" });
    }

    // create tokens
    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      process.env.JWT_SECRET || "rahasia",
      { expiresIn: "1d" }
    );

    res.json({
      success: true,
      message: "Login Berhasil",
      token: token,
      user: { username: admin.username },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { login };

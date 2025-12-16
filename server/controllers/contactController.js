const db = require("../config/db");

const submitContact = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "Data tidak lengkap!" });
  }

  try {
    const newContact = await db.query(
      "INSERT INTO contacts (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, phone, message]
    );

    res.status(201).json({
      success: true,
      message: "Pesan berhasil dikirim!",
      data: newContact.rows[0],
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { submitContact };

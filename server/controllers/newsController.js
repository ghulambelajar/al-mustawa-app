const db = require("../config/db");

const getAllNews = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM news ORDER BY event_date DESC"
    );

    res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Ineternal Server Error" });
  }
};

const getNewsById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.query("SELECT * FROM news WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Berita tidak ditemukan!" });
    }
    res.status(200).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = {
  getAllNews,
  getNewsById,
};

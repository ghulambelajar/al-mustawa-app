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

const createNews = async (req, res) => {
  const { title, content, image_url, event_date } = req.body;
  try {
    const result = await db.query(
      `INSERT INTO news (title, content, image_url, event_date) 
             VALUES ($1, $2, $3, $4) RETURNING *`,
      [title, content, image_url, event_date]
    );
    res.status(201).json({
      success: true,
      message: "Berita berhasil dibuat!",
      data: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Gagal membuat berita" });
  }
};

const deleteNews = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM news WHERE id = $1", [id]);
    res.json({ success: true, message: "Berita berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Gagal menghapus berita" });
  }
};

module.exports = {
  getAllNews,
  getNewsById,
  createNews,
  deleteNews,
};

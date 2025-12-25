const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");
const newsRoutes = require("./routes/newRoutes");
const contactRoutes = require("./routes/contactRoutes");
const registrationRoutes = require("./routes/registrationRoutes");
const authRoutes = require("./routes/authRoutes");
// configure env
dotenv.config();

// init app
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// main route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// test route
app.get("/test-db", async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()");
    res.json({
      pesan: "Koneksi berhasil!",
      waktu_server_db: result.rows[0].now,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Gagal koneksi ke database");
  }
});

app.use("/api/news", newsRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/register", registrationRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

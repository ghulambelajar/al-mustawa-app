const db = require("../config/db");
const ExcelJS = require("exceljs");

// INPUT: Save Registrant Data
const registerStudent = async (req, res) => {
  const { full_name, age, gender, parent_name, phone, address } = req.body;

  try {
    const result = await db.query(
      `INSERT INTO registrations (full_name, age, gender, parent_name, phone, address) 
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [full_name, age, gender, parent_name, phone, address]
    );

    res.status(201).json({
      success: true,
      message: "Pendaftaran Berhasil!",
      data: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Gagal Mendaftar" });
  }
};

// OUTPUT: Download Excel (Admin Only)
const exportExcel = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM registrations ORDER BY created_at DESC"
    );
    const students = result.rows;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Data Pendaftar");

    worksheet.columns = [
      { header: "No", key: "no", width: 5 },
      { header: "Nama Santri", key: "full_name", width: 25 },
      { header: "Umur", key: "age", width: 10 },
      { header: "Gender", key: "gender", width: 15 },
      { header: "Nama Wali", key: "parent_name", width: 25 },
      { header: "No HP", key: "phone", width: 20 },
      { header: "Alamat", key: "address", width: 30 },
      { header: "Tgl Daftar", key: "created_at", width: 20 },
    ];

    students.forEach((student, index) => {
      worksheet.addRow({
        no: index + 1,
        full_name: student.full_name,
        age: student.age,
        gender: student.gender,
        parent_name: student.parent_name,
        phone: student.phone,
        address: student.address,
        created_at: new Date(student.created_at).toLocaleString("id-ID"),
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + "Data_Santri_Baru.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).send("Gagal download Excel");
  }
};

// READ: View List on Web (For Admin Table)
const getAllRegistrations = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM registrations ORDER BY created_at DESC"
    );
    res.json({ success: true, data: result.rows });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { registerStudent, exportExcel, getAllRegistrations };

const express = require("express");
const cors = require("cors");
// const { Pool } = require("pg"); // uncomment when wiring up RDS

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Example DB pool setup (credentials pulled from env / Secrets Manager, never hardcoded)
// const pool = new Pool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT || 5432,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   ssl: { rejectUnauthorized: false },
// });

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "multi-tier-backend",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/items", async (req, res) => {
  // Example query once DB is wired up:
  // const result = await pool.query("SELECT * FROM items LIMIT 20");
  // res.json(result.rows);
  res.json([
    { id: 1, name: "Sample item A" },
    { id: 2, name: "Sample item B" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend API listening on port ${PORT}`);
});

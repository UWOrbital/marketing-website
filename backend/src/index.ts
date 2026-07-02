import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:5173" }));
app.use(express.json());

const news = [
  {
    id: 1,
    title: "CDS Competition Update",
    excerpt:
      "Our team is preparing for the Canadian Satellite Design Competition.",
    date: "2026-06-15",
  },
  {
    id: 2,
    title: "Ground Station Go-Live",
    excerpt: "Our ground station on campus is now operational.",
    date: "2026-05-20",
  },
];

app.get("/api/news", (_req, res) => {
  res.json(news);
});

app.get("/api/team", (_req, res) => {
  res.json({
    leads: [{ name: "Ayan Sarkar", role: "Team Lead" }],
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

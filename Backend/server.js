import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB error:", err));

// ========================
// SCHEMAS
// ========================

// Contact Form Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  department: String,
  message: String,
  callback: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// Resume Form Schema
const resumeSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  message: String,
  resumePath: String, // store file path
  createdAt: { type: Date, default: Date.now },
});

const Resume = mongoose.model("Resume", resumeSchema);

// ========================
// FILE UPLOAD (Multer)
// ========================
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// ========================
// ROUTES
// ========================

// Get all contact submissions
app.get("/api/contact", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error("Error in /api/contact:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get("/", async (req, res) => {
  res.send("Welcome to the Resume API");
});

// Get all resume submissions
app.get("/api/resume", async (req, res) => {
  try {
    const resumes = await Resume.find().sort({ createdAt: -1 });
    res.json(resumes);
  } catch (err) {
    console.error("Error in /api/resume:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Serve resume files statically
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// Contact Form POST
app.post("/api/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ success: true, message: "Contact form submitted!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Resume Form POST (with file upload)
app.post("/api/resume", upload.single("resume"), async (req, res) => {
  try {
    console.log("Resume POST body:", req.body);
    console.log("Resume POST file:", req.file);
    const resume = new Resume({
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
      resumePath: req.file ? `/uploads/${req.file.filename}` : null,
    });
    await resume.save();
    res.status(201).json({ success: true, message: "Resume submitted!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ========================
// START SERVER
// ========================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

import express from "express";
import Testimonial from "../models/Testimonial.js";
import upload from "../middleware/upload.js"; // 🔄 Add this import

const router = express.Router();

// GET all testimonials
router.get("/", async (req, res) => {
  try {
    console.log("Fetching all testimonials...");
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    console.log("Fetched testimonials:", testimonials);
    res.json(testimonials);
  } catch (err) {
    console.error("Error fetching testimonials:", err);
    res.status(500).json({ error: "Failed to fetch testimonials" });
  }
});

// POST a new testimonial with image upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, review, mentions } = req.body;
    const imgPath = req.file ? `/uploads/${req.file.filename}` : "";

    console.log("Saving new testimonial:", { name, review, mentions, imgPath });

    const newTestimonial = new Testimonial({
      name,
      review,
      mentions,
      imgPath,
    });

    const saved = await newTestimonial.save();
    console.log("Saved testimonial:", saved);
    res.status(201).json(saved);
  } catch (err) {
    console.error("Error saving testimonial:", err);
    res.status(400).json({ error: "Failed to save testimonial" });
  }
});

export default router;

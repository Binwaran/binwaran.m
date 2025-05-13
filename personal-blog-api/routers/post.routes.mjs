import express from "express";

const router = express.Router();

router.post("/posts", async (req, res) => {
  const newPost = req.body;

  console.log("🔥 Mocked newPost:", newPost); // แสดงผลใน terminal

  // แทนที่จะ insert เข้า DB → ส่ง response ทันที
  return res.status(201).json({
    message: "Mock: Created post successfully",
    data: newPost, // แสดงว่ารับข้อมูลได้จริง
  });
});

export default router;

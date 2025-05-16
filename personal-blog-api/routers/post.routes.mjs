import express from "express";
import { validatePost } from "../validators/post.validation.mjs";

const router = express.Router();

router.post("/", validatePost, async (req, res) => {
  const { title, image, category_id, description, content, status_id } = req.body;

  console.log("🔥 Mocked newPost:", req.body);

  res.status(201).json({
    message: "Mock: Created post successfully",
    data: { title, image, category_id, description, content, status_id },
  });
});

// routers/post.routes.mjs
router.get("/", (req, res) => {
  res.status(200).json({
    posts: [
      {
        id: 1,
        title: "Mock Post 1",
        category: "Life",
        content: "Just a mock post",
      },
      {
        id: 2,
        title: "Mock Post 2",
        category: "Dev",
        content: "Another mock post",
      },
    ],
  });
});


export default router;
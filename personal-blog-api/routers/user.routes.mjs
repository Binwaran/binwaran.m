// routes/user.routes.mjs
import express from "express";
const router = express.Router();

router.get("/profiles", (req, res) => {
  res.status(200).json({
    data: {
      name: "john",
      age: 20,
    },
  });
});

export default router;

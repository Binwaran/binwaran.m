// app.mjs
import express from "express";
import cors from "cors";
import userRoutes from "./routers/user.routes.mjs";

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/", userRoutes);

// Route สำหรับดูโปรไฟล์ John
app.get("/profiles", (req, res) => {
  res.status(200).json({
    data: {
      name: "john",
      age: 20,
    },
  });
});

// Default route
app.get("/", (req, res) => {
  res.send("Personal Blog API is running!");
});

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});

import express from "express";
import cors from "cors";
import postRoutes from "./routers/post.routes.mjs";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Personal Blog API is running!");
});

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
import express from "express";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

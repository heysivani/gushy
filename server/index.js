import express from "express";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

app.use("/posts", postRoutes);

app.get("/", (req, res) => res.send("Gushy API"));

const PORT = process.env.PORT || PORT;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error));

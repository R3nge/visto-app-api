import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://root:123@visto-app.n4j0sy1.mongodb.net/?retryWrites=true&w=majority"
  )

  .then((data) => {
    console.log("MongoDB Connection Succeeded", data.version);
  })

  .catch((err) => {
    console.log("Error in DB connection:", err.message);
  });

app.listen(3333, () =>
  console.log("Server running on port http://localhost:3333")
);

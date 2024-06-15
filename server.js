import express from "express";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(
    `Server running in ${process.env.DEV_MODE} on port ${port}...`.bgCyan.white
  )
);

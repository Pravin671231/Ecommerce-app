const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Api running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});

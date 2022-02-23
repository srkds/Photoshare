require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth");

// INITIALIZING EXPRESS SERVER
const app = express();
const PORT = 8000;

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB CONNECTED`);
  });

// MIDLEWARES
app.use(express.json()); // To recognize incoming req object as JSON
app.use(cookieParser()); // parse cookie and populate req.cookie
app.use(cors()); //Cross-Origin Resource Sharing

// ROUTES
app.use("/api", authRoutes);

// SERVER LISTEN
app.listen(PORT, () => {
  console.log(`Backend is up and running on PORT ${PORT}`);
});

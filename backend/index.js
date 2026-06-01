require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();



app.listen(PORT, async () => {
  console.log("App is started !!");

  try {
    await mongoose.connect(url);
    console.log("DB connected !");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
});

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const axios = require("axios");
const authRoute = require("./Routes/AuthRoute");

const verifyUser = require("./middleware/verifyUser");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const { UsersModel } = require("./models/UsersModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://kite-0dha.netlify.app",
      "https://0dhaclone.netlify.app",
      "http://localhost:3001",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.use("/", authRoute);
app.get('/stockprice/:symbol', async (req, res) => {
  const symbol = req.params.symbol + ".NS"; // NSE suffix
  try {
    const { data } = await axios.get(
      `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
      }
    );
    const price = data.chart.result[0].meta.regularMarketPrice;
    res.json({ symbol, price });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch price" });
  }
});

app.get("/allholdings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allorders", verifyUser, async (req, res) => {
  console.log("req.user:", req.user); // Debugging line to check if req.user is populated
  const userId = req.user.id;
  let allOrders = await OrdersModel.find({ userId }).sort({ _id: -1 });
  res.json(allOrders);
  // console.log(allOrders);
});

app.get("/allpositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});
// app.get('/seed', async (req, res) => {
//   await PositionsModel.insertMany(allPositions);
//   console.log("Seeded positions data !");
//   res.json({ message: "Seeded!" });
// });

app.post("/newOrder", verifyUser, async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    userId: req.user.id,
  });

  newOrder.save();
  res.send("  Order placed successfully ! ");
});

app.put("/updateOrder/:id", async (req, res) => {
  let orderId = req.params.id;
  await OrdersModel.findByIdAndUpdate(orderId, {
    qty: req.body.qty,
    price: req.body.price,
  });
  res.send("Order updated successfully !");
});

app.delete("/deleteOrder/:id", async (req, res) => {
  let orderId = req.params.id;
  await OrdersModel.findByIdAndDelete(orderId);
  res.send("Order deleted successfully !");
});

app.listen(PORT, async () => {
  console.log("App is started !!");
  console.log("listening on port ", PORT);

  try {
    await mongoose.connect(url);
    console.log("DB connected !");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
});

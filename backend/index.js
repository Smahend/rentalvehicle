require("dotenv").config();
const express = require("express");
const app = express();
const connect = require("./config/db");
const cors = require("cors");
const router = require("./router/rentalRouter");
const router = require("./router/vehicalRouter");
const port = process.env.PORT || 8080;

console.log(process.env.PORT, "PORT");

//parsing json
app.use(express.json());

//cors
app.use(cors());



//routes
router.use("/vehicle",vehicalRouter)
router.use("/",rentalRouter)

app.get("/", async (req, res) => {
  res.send("Welcome to the server");
});

async function start() {
  await connect();
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

start();
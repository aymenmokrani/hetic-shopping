const express = require("express");
const app = express();
const cors = require("cors");
const shoppingRoutes = require("./routes/shoppingRoutes");
const port = 5000;

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api", shoppingRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to hetic boutique server!");
});

app.listen(port, () => {
  console.log("server is up and listening to port 5000");
});

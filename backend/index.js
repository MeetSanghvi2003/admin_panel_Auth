const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectToMongo();

const app = express();

app.use(cors());
app.use(express.json());

//available routes
app.use("/auth", require("./routes/auth"));

app.listen(5000);

const express = require("express");
require("dotenv").config();
const app = express();
const Port = process.env.SERVER_PORT || 5001;
const db = require("./util/db");
const morgan = require("morgan");
const cors = require("cors");
// const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("common"));
// dotenv.config();



app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(Port, () => {
  try {
    console.log(`API running at port no. ${Port}!`);
    db.authenticate()
      .then(() => {
        console.log(`${process.env.DB_DIALECT} database is connected!`);
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(`Error while running API ${error}!`);
  }
});
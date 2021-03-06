const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

require ("dotenv").config();
const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const apiRoutes = require("./controllers/api/index");
app.use(apiRoutes);

const homeRoutes = require("./controllers/homeRoutes");
app.use(homeRoutes);

console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
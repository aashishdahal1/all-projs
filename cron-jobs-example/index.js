const express = require("express");
const cronjob = require("./cron/tasks")();

const app = express();

app.get("/", (req, res) => {
  console.log("Welcome to my world!");
  res.send("Its working");
});

app.listen(4000, () => {
  console.log("app listening to port 4000");
});

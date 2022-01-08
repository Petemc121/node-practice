const express = require("express");
const path = require("path");
const app = express();
const port = 8080;
const host = "localhost";
const fs = require("fs");

const notFoundPage = fs.readFileSync("./404.html", "utf8");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});
app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "404.html"));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

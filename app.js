const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

app.use(express.static('public'))

app.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "views", "home.html"), (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-type": "text/plain" });
      res.end("Sorry the page was not found");
    } else {
      res.writeHead(202, { "Content-type": "text/html" });
      res.end(data);
    }
  });
});

app.listen(3000);

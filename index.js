const express = require("express");
// const { sleep } = require("sleep");

const app = express();
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/intense", (req, res) => {
  setTimeout(function () {
    res.send("Hello Compute heavy 5s!");
  }, 5000);
  //   res.send("Hello Compute heavy!");
});
app.listen(8080, () => console.log("Example app listening on port 8080!"));

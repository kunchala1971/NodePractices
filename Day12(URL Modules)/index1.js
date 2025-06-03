var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile("./data.json", (err, data) => {
      if (!err) {
        res.write(data);
      } else {
        res.write("Data Fetching is Failed");
      }

      res.end();
      console.log("Data Fetching is completed");
    });
  })
  .listen(4000);

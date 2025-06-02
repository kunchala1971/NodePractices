var {createServer} = require("http");
createServer(function (req, res) {
    // res.writeHead(200, {
    //   "Content-Type": "text/plain",
    // });
    res.write("Server Created Successfully....");
    res.end();
  })
  .listen(4000);

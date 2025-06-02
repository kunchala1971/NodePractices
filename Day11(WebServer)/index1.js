var {createServer} = require("http");
createServer(function (req, res) {
    res.write(req.url);
    res.write("Server Created Successfully....");
    res.end();
  })
  .listen(4000);
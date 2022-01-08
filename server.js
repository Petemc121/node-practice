http = require("http");
path = require("path");
host = "localhost";
port = 8080;
fs = require("fs");
url = require("url");

const notFoundPage = fs.readFileSync("./404.html", "utf8");

const serverFunction = (req, res) => {
  const q = url.parse(req.url, true);
  console.log(q);
  let filename = "." + q.pathname;

  if (filename === "./") {
    filename = "index.html";
  }
  fs.readFile(filename + ".html", (err, data) => {
    if (err) {
      res.writeHead(200, { "Content-Type": "text/html" });
      console.error(err);
      return res.end(notFoundPage);
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
};

const server = http.createServer(serverFunction);
server.listen(port, host, () => {
  console.log(`server is listening on port ${port}`);
});

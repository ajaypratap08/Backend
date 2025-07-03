const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
});
const port = 3001;
server.listen(port, () => {
  console.log("Server is Listing.....");
});

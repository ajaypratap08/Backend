// app.js
const http = require("http");
const calci = require("./calci.js"); // Fixed: calcu -> calci
const sum = require("./sum.js");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/" && req.method === "GET") {
    res.write(`
      <html>
        <h1>Welcome to my Page..</h1>
        <a href="/calci.js">Calculator</a>               
      </html>
    `);
    res.end();
  } else if (req.url.toLowerCase() === "/calci.js" && req.method === "GET") {
    // Show calculator page from calci.js
    calci(req, res); // Fixed: calcu -> calci
  } else if (req.url === "/sum" && req.method === "POST") {
    // Handle form submission
    sum(req, res);
  } else {
    res.statusCode = 404;
    res.write("<h1>404 Not Found</h1>");
    res.end();
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is Listening at http://localhost:${PORT}/`);
});

// External Modules
const express = require("express");
const app = express();

// Local Modules
const handleRequest = require("./user");

// Middleware 1 (only logging)
app.use("/", (req, res, next) => {
  console.log("This is my first middleware", req.url, req.method);
  // res.send("Welcome to backend learning...from first middleware");
  next(); // pass control to next middleware
});

// Middleware 2 (sends response)
app.use("/products", (req, res) => {
  console.log("This is my second middleware", req.url, req.method);
  // res.send("<p>Welcome to backend learning...from second middleware</p>");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is Listening at http://localhost:${PORT}/`);
});

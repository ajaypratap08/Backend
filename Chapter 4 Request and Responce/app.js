console.log("Ajay Pratap Chand");

const domain = require("http");
const fs = require("fs");

const server = domain.createServer((req, res) => {
  // res naam ka ek bag aaya esme saaman(responace) bar do mai lete jauga..
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    // ✅ send HTML as a string using backticks
    res.write(`
    <html>
      <head>
        <title>Learning Backend</title>
      </head>
      <body>
        <h1>Learning Backend topic: Sending Request</h1>
        <h1>Welcome to Home : Fill Detail</h1>
     <form action="/submit-detail" method="POST">
  <label for="first-name">First Name:</label><br>
  <input type="text" id="first-name" name="firstName"><br><br>

  <label for="last-name">Last Name:</label><br>
  <input type="text" id="last-name" name="lastName"><br><br>

  <label for="gender">Gender:</label><br>

  <input type="radio" id="male" name="Gender" value="male">
  <label for="male">Male</label><br>

  <input type="radio" id="female" name="Gender" value="female">
  <label for="female">Female</label><br><br>

  <button type="submit">Submit</button>
</form><br>
<br>


      </body>
    </html>
  `);

    // ✅ end the response
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    // ✅ send HTML as a string using backticks
    res.write(`
    <html>
      <head>
        <title>Learning Backend</title>
      </head>
      <body>
        <h1>CheckOut new Products</h1>
      </body>
    </html>
  `);
    // ✅ end the response
    return res.end();
  } else if (
    req.url.toLocaleLowerCase() === "/submit-detail" &&
    req.method === "POST"
  ) {
    res.setHeader("Content-Type", "text/html");
    // ✅ send HTML as a string using backticks
    res.write(`
    <html>
      <head>
        <title>Detail-filles</title>
      </head>
      <body>
        <h1>Detail is Submitted..</h1>
      </body>
    </html>
  `);
    // ✅ end the response
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    // ✅ send HTML as a string using backticks
    res.write(`
    <html>
      <head>
        <title>Learning Backend</title>
      </head>
      <body>
        <h1>Page is not Ready...</h1>
        <h1>Please Render me...</h1>
      </body>
    </html>
  `);

    // ✅ end the response
    res.end();
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is Listing at http://localhost:3001/`);
  // process.exit(); // It is used to run the server only one time
});

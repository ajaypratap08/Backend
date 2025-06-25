
const userHandleReques = (req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
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
          </form><br><br>
        </body>
      </html>
    `);
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
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
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-detail" &&
    req.method === "POST"
  ) {
    let body = [];
    // chunk le le kar FULL DATA collect krenge.
    req.on("data", (chunk) => {
      body.push(chunk); // collecting chunks
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const parsedData = new URLSearchParams(parsedBody); // ✅ FIXED

      console.log("First Name:", parsedData.get("firstName"));
      console.log("Last Name:", parsedData.get("lastName"));
      console.log("Gender:", parsedData.get("Gender"));

      res.setHeader("Content-Type", "text/html");
      res.write(`
        <html>
          <head>
            <title>Detail-filled</title>
          </head>
          <body>
            <h1>Details Submitted Successfully!</h1>
            <p><strong>First Name:</strong> ${parsedData.get("firstName")}</p>
            <p><strong>Last Name:</strong> ${parsedData.get("lastName")}</p>
            <p><strong>Gender:</strong> ${parsedData.get("Gender")}</p>
          </body>
        </html>
      `);
      return res.end();
    });
  } else {
    res.setHeader("Content-Type", "text/html");
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
    res.end();
  }
};


module.exports = userHandleReques;


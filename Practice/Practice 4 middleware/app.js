const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("First Middleware ", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("Second Middleware ", req.url, req.method);
  next();
});
// app.use((req, res, next) => {
//   console.log("Second Middleware ", req.url, req.method);
//   res.send("Welocme To home Page");
//   next();
// });

app.get("/contact-us", (req, res) => {
  res.send(`
    <h1>Welcome to Home : Fill Detail</h1>
    <form action="/contact-us" method="POST">
      <label for="first-name">First Name:</label><br>
      <input type="text" id="first-name" name="firstName"><br><br>

      <label for="last-name">Last Name:</label><br>
      <input type="text" id="last-name" name="lastName"><br><br>

      <label for="gender">Gender:</label><br>
      <input type="radio" id="male" name="gender" value="male">
      <label for="male">Male</label><br>

      <input type="radio" id="female" name="gender" value="female">
      <label for="female">Female</label><br><br>

      <button type="submit">Submit</button>
    </form><br><br>
  `);
});

app.post("/contact-us", (req, res) => {
  let body = [];

  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const parsedData = new URLSearchParams(parsedBody);

    const firstName = parsedData.get("firstName");
    const lastName = parsedData.get("lastName");
    const gender = parsedData.get("gender");

    res.send(`
      <h1>First Name: ${firstName}</h1><br>
      <h1>Last Name: ${lastName}</h1><br>
      <h3>Gender: ${gender}</h3>
    `);
  });
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000/`);
});

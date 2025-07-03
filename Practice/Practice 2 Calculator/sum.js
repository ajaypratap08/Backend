function sum(req, res) {
  if (req.url === "/sum" && req.method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const bodydata = Buffer.concat(body).toString();
      const params = new URLSearchParams(bodydata);

      const num1 = parseFloat(params.get("num1"));
      const num2 = parseFloat(params.get("num2"));
      const result = num1 + num2;

      console.log("num1 =", num1);
      console.log("num2 =", num2);

      res.setHeader("Content-Type", "text/html");
      res.write(`
        <html>
          <body>
            <h1>The sum of ${num1} and ${num2} is ${result}</h1>
            <a href="/">Go back</a>
          </body>
        </html>
      `);
      res.end();
    });
  }
}

module.exports = sum; // Fixed: module. Exports -> module.exports

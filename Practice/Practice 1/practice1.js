const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url.toLowerCase() === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <h1>Welcome to Home</h1>
      </body>
    </html>`);
    return res.end();
  }

  else if (req.url.toLowerCase() === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head>
        <title>Mens</title>
      </head>
      <body>
        <h1>Welcome to Men's Section</h1>
      </body>
    </html>`);
    return res.end();
  }

  else if (req.url.toLowerCase() === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head>
        <title>Women</title>
      </head>
      <body>
        <h1>Welcome to Women's Section</h1>
      </body>
    </html>`);
    return res.end();
  }

  else if (req.url.toLowerCase() === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head>
        <title>Kids</title>
      </head>
      <body>
        <h1>Welcome to Kids Section</h1>
      </body>
    </html>`);
    return res.end();
  }

  else if (req.url.toLowerCase() === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head>
        <title>Cart</title>
      </head>
      <body>
        <h1>Welcome to Cart Section</h1>
      </body>
    </html>`);
    return res.end();
  }

  // 404 Fallback
  else {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <ul>
      <li><a href="/home">Home</a></li>
      <li><a href=".mens">Mens</a></li>
      <li><a href="/women">Womens</a></li>
      <li><a href="/kids">Kids</a></li>
      <li><a href="/cart">Cart</a></li>
    </ul>
    </html>`);
    return res.end();
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}/`);
});

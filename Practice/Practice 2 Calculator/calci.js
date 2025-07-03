// calci.js
function calci(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.write(`<!DOCTYPE html>
<html>
<head>
  <title>Number Input Form</title>
</head>
<body>
  <h2>Enter Two Numbers</h2>
  
  <form action="/sum" method="POST">
    <label for="num1">First Number:</label><br>
    <input type="number" id="num1" name="num1" required><br><br>
    
    <label for="num2">Second Number:</label><br>
    <input type="number" id="num2" name="num2" required><br><br>
    
    <button type="submit">Submit</button>
  </form>
</body>
</html>
`);
  res.end();
}

module.exports = calci; // Fixed: module. Exports -> module.exports

// sum.js


const http = require("http"); 
const handleRequest= require("./user");

const server = http.createServer(handleRequest);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is Listening at http://localhost:${PORT}/`);
});

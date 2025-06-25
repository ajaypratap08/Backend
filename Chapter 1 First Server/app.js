console.log("Ajay Pratap Chand");

const domain = require('http');

const server = domain.createServer((req,res)=>{console.log(req)});

const PORT = 3000;
server.listen(PORT,()=>{
  console.log(`Server is Listing at ${PORT}`);
  // process.exit(); // It is used to run the server only one time
});


console.log("Ajay Pratap Chand");

const domain = require('http');

const server = domain.createServer((req,res)=>{
  // res naam ka ek bag aaya esme saaman(responace) bar do mai lete jauga..
  console.log(req.url,req.method,req.headers);
  res.setHeader('Content-Type','text/html');
  res.write(<html>
    <head>
      <title>Learning Backend</title>
    </head>
    <body>
      <h1>Learing Backend topic Sending Request</h1>
    </body>
  </html>)
});

const PORT = 3001;
server.listen(PORT,()=>{
  console.log(`Server is Listing at ${PORT}`);
  // process.exit(); // It is used to run the server only one time
});


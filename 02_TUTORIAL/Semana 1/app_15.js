const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3015;
app.use(express.static("public"));

//app.get ((req, res) => {
//  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/html');
//});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
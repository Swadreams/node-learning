const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const contact = fs.readFileSync('./contact.html');
const services = fs.readFileSync('./services.html');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  const url = req.url;
  switch (url) {
    case '/home': {
      res.end(home);
      break;
    }
    case '/contact': {
      res.end(contact);
      break;
    }
    case '/about': {
      res.end(about);
      break;
    }
    case '/services': {
      res.end(services);
      break;
    }
    default: {
      res.statusCode = 404;
      res.end('<h1> 404 not found </h1>');
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

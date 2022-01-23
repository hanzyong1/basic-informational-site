const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  let path = '';
  switch (req.url) {
    case '/':
      path = 'index.html';
      break;
    case '/about':
      path = 'about.html';
      break;
    case '/contact-me':
      path = 'contact-me.html';
      break;
    default:
      path = '404/html';
      break;
  };

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    };
  });
});

server.listen(8080, 'localhost', () => {
  console.log(`Server running at 8080`)
});
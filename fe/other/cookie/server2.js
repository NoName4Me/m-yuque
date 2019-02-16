const http = require('http');

const hostname = '192.168.0.105';
const port = 3001;

const server = http.createServer((req, res) => {
  // console.log(req.getHeader('cookie'));
  console.log(req.headers.cookie);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('set-cookie', [
    'who=jonge; domain=jonge.com; path=/', // this will be set to .jonge.com
    'who=httponly jonge; path=/; httponly', // default jonge.com
    'key=value; domain=.jonge.com'
  ]);
  res.end(
    '<p>hi cookie, image below is for fetch cookie from http://127.0.0.1:3000</p><img src="http://127.0.0.1:3000">'
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

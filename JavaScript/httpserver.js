const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> This is demo</h1> <p> Hey you, yes you </p>');
})

server.listen(port, () => {
    console.log('Server listening on port ' + port);
});
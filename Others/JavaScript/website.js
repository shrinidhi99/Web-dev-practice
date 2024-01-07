const { Console } = require('console');
const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html')
    console.log(req.url);
    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1> This is demo</h1> <p> Hey you, yes you </p>');
    }

    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1> This is demo</h1> <p> About you </p>');
    }

    else if (req.url == '/hello') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }

    else {
        res.statusCode = 404;
        res.end('<h1> Page not found</h1>');
    }
})

server.listen(port, () => {
    console.log('Server listening on port ' + port);
});
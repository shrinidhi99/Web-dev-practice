const express = require('express');
var exphbs  = require('express-handlebars');
const path = require('path');
const app = express()
const port = 3000

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, "static")));
app.use('/', require(path.join(__dirname, 'routes/blog.js')))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// })

// app.get('/about', (req, res) => {
//     res.send('About page')
// })

// app.get('/hello/:name', (req, res) => {
//     res.send('Hello ' + req.params.name)
// })

app.listen(port, () => {
    console.log('Example app listening at http://localhost:' + port)
})
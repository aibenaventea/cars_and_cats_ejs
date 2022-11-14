const express = require('express');
// const ejs = require('ejs');

const app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index')
})

app.get('/cats', (request, response) => {
    response.render('cats')
})

app.get('/cars', (request, response) => {
    response.render('cars')
})

app.get('/carForm', (request, response) => {
    response.render('carForm')
})

app.listen(8000);
console.log('Server is listening on port 8000')
console.log(__dirname);
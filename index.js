const express = require('express');
const routes = require('./routes/routes');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

app.use('/', routes());

app.listen('7000', ()=>{
    console.log('Server up');
});
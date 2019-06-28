const express = require('express');
const routes = require('./routes/routes');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./config/db');

// helpers con algunas funciones
const helpers = require('./helpers');

require('./models/Proyectos');

db.sync()
    .then(()=> console.log('Conectado al servidor bd'))
    .catch(err => console.log(err));

const app = express();

// definir donde cargar los archivos estaticos
app.use(express.static('public'));

// habilitar pug
app.set('view engine', 'pug');

// agregar la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

// pasar vardump a la aplicación
app.use( (req, res, next)=>{
    res.locals.vardump = helpers.vardump;
    next();
});

// habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());

app.listen('7000', ()=>{
    console.log('Server up');
});
const express = require('express')
const router = express.Router();
const proyectosControlller = require('../controllers/proyectosController');
const { body } = require('express-validator/check');

module.exports = function(){

    router.get('/', proyectosControlller.proyectosHome);

    router.get('/nosotros', proyectosControlller.nosotros);

    router.get('/nuevo-proyecto', proyectosControlller.formularioProyecto);

    router.post('/nuevo-proyecto', 
        body('nombre').not().isEmpty().trim().escape(),
        proyectosControlller.nuevoProyecto
    );

    // listar proyecto
    router.get('/proyectos/:url', proyectosControlller.proyectoPorUrl);

    // Actualizar proyecto
    router.get('/proyecto/editar/:id', proyectosControlller.formularioEditar);

    router.post('/nuevo-proyecto/:id', 
        body('nombre').not().isEmpty().trim().escape(),
        proyectosControlller.actualizarProyecto
    );

    return router;
}
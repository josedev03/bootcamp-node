const express = require('express')
const router = express.Router();
const startController = require('../controllers/startcontroller');
const { body } = require('express-validator/check');

module.exports = function(){

    router.get('/', startController.proyectosHome);

    router.get('/nosotros', startController.nosotros);

    router.get('/nuevo-proyecto', startController.formularioProyecto);

    router.post('/nuevo-proyecto', 
        body('nombre').not().isEmpty().trim().escape(),
        startController.nuevoProyecto);
    return router;
}
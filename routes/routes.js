const express = require('express')
const router = express.Router();
const startController = require('../controllers/startcontroller');

module.exports = function(){

    router.get('/', startController.home);

    router.get('/nosotros', startController.nosotros);

    router.get('/nuevo-proyecto', startController.formularioProyecto);

    router.post('/nuevo-proyecto', startController.nuevoProyecto);

    return router;
}
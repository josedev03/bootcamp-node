const Sequelize = require('sequelize');
const db = require('../config/db');

// p1: nombre del modelo, campos de la tabla
const Proyectos = db.define('proyectos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    url: Sequelize.STRING
})

module.exports = Proyectos;
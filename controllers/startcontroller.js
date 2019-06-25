const Proyectos = require('../models/Proyectos');
const slug = require('slug');

exports.home = (req, res)=>{
    res.render('home', {
        nombrePagina: 'homeTitle'
    });
}

exports.nosotros = (req, res)=>{
    res.render('nosotros', {
        nombrePagina: 'nosotrosTitle'
    });
}

exports.formularioProyecto = (req, res)=>{
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    });
}

exports.nuevoProyecto = async (req, res)=>
{
    let errores = [];
    const {nombre} = req.body;

    if(!nombre){
        errores.push({"text": "Agrega un Nombre al proyecto"});
    }

    if(errores.length > 0){
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores
        })
    }else{
        const url = slug(nombre).toLowerCase();
        const proyecto = await Proyectos.create({nombre, url});
        res.redirect('/');
    }
}
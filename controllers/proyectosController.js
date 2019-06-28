const Proyectos = require('../models/Proyectos');

exports.proyectosHome = async (req, res)=>{
    const proyectos = await Proyectos.findAll();

    res.render('index', {
        nombrePagina: 'homeTitle',
        proyectos
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
        const proyecto = await Proyectos.create({nombre});
        res.redirect('/');
    }
}

exports.proyectoPorUrl = async (req, res) =>{
    const proyecto = await Proyectos.findOne({
        where:{
            url: req.params.url
        }
    })

    if(!proyecto) return netx();

    res.render('tareas', {
        nombrePagina: 'tareas del proyecto',
        proyecto
    });
}
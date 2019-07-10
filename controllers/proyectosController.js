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

exports.formularioProyecto = async  (req, res)=>{
    const proyectos = await Proyectos.findAll();

    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto',
        proyectos
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
    const proyectosPromise = Proyectos.findAll();

    const proyectoPromise = Proyectos.findOne({
        where: {
            url: req.params.url
        }
    });

    const [proyectos, proyecto] = await Promise.all([proyectosPromise, proyectoPromise]);

    if(!proyecto) return netx();

    res.render('tareas', {
        nombrePagina: 'Tareas del Proyecto',
        proyecto,
        proyectos
    });
}

exports.formularioEditar = async (req, res) =>{
    const proyectosPromise = Proyectos.findAll();

    const proyectoPromise = Proyectos.findOne({
        where: {
            id: req.params.id
        }
    });

    const [proyectos, proyecto] = await Promise.all([proyectosPromise, proyectoPromise]);

    // render a la vista
    res.render('nuevoProyecto', {
        nombrePagina: 'Editar Proyecto',
        proyectos,
        proyecto
    })
}

exports.actualizarProyecto = async (req, res)=>
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
        await Proyectos.update(
            {nombre: nombre},
            {where: {id: req.params.id}}
        );
        res.redirect('/');
    }
}

exports.eliminarProyecto = async (req, res, netx)=>{
    const {urlProyecto} = req.query;
    const resultado = await Proyectos.destroy({where: {url: urlProyecto}});

    res.status(200).send('Proyecto eliminado correctamente');
}
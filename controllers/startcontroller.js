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

exports.nuevoProyecto = (req, res)=>{
    res.send('se creara un nuevo proyecto');
}
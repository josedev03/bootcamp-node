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

exports.nuevoProyecto = (req, res)=>
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
        // no hay errores
        // insertar en bd
    }

    console.log(nombre);
}
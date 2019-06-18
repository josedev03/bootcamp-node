module.exports.home = (req, res)=>{
    res.render('home', {
        titlePage: 'homeTitle'
    });
}

module.exports.nosotros = (req, res)=>{
    res.render('nosotros', {
        titlePage: 'nosotrosTitle'
    });
}
const helpers = require('./helpers');
console.log(helpers);

var persona = {
    name: 'carlos',
    edad: 18,
    pais: 'colombia'
}

var data = helpers.vardump(persona);
console.log(data);
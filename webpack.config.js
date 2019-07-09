const path = require('path');
const webpack = require('webpack');

module.exports = {
    // definimos un archivo de entrada
    entry: './public/app.js',
    // configuramos el archivo de salida
    output: {
        // nombre archivo saida
        fileName: 'bundle.js',
        // ruta directorio para el archivo de salida
        path: path.join(__dirname, './public/dist')
    },
    module:{
        // indicamos los modulos que necesitamos
        // se puede definir una regla por cada lenguaje ejemplo una regla para sas, imagenes, js
        rules:[
            {
                // se indican los archivos a procesar
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
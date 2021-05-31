const log = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const indexRoutes = require('./routes/index.js');

const app = express(); //inicializacion 


//escuchar al servidor
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view egine', 'ejs');

//Conexion a la base de datos mongo

mongoose.connect('mongodb+srv://karla_2110:210992karla@clusterkarlagarcia.emqrq.mongodb.net/IOT_Proyect?retryWrites=true&w=majority')
.then(bd=> console.log('Conectado a la base de datos! :)'))
.catch(err => console.log('Error de conexión', err));


//middeleware
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//RUTAS
app.use('/', indexRoutes);


app.listen(app.get('port'), ()=> {
    console.log('Servidor funcionando en el puerto', app.get('port'))
}); 




//constantes de conexion a BD
//const usuario = "karla_2110";
//const password = "210992karla";
//const bdname = "iot_proyect";
//const uri = `mongodb+srv://karla_2110:210992karla@clusterkarlagarcia.emqrq.mongodb.net/IOT_Proyect?retryWrites=true&w=majority`

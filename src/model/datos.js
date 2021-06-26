const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Dato = new Schema({
    nom: {type: String, default: "unknow name"},
    age: {type: String, default: "unknow age"},
    tem: String,
    pul: String,
    fecha: {type: Date, default: Date.now}
});
module.exports = mongoose.model('datos', Dato);
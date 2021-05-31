const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Dato = new Schema({
    tem: String,
    pul: String,
    fecha: Date
});
module.exports = mongoose.model('datos', Dato);
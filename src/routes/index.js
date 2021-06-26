const express = require('express');
const router = express.Router();
const model = require ('../model/datos')(); //funcion
const valores = require('../model/datos'); //constante para extraer lo recursos

//solusitud de peticion y respuesta
router.get('/', async (req, res)=> {
    const datos = await valores.find();
    console.log(datos);
    res.render('index.ejs', {
        datos
    });
});

router.post('/add', async (req, res)=> {
    const dato = new valores(req.body);
    await dato.save();
    //res.redirect('/');
    res.json(req.body);

});

module.exports = router;
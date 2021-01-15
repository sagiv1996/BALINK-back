module.exports = app =>{
    const controllers = require("./controllers/controllers");
    var router = require("express").Router();
    router.get('/', controllers.getCountries);
    router.post('/', controllers.checkData);
    app.use('/api', router);
}
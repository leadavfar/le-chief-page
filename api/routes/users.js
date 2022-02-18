const router = require('express').Router();

router.get('/', function (req, res) {
    res.send("<h1>Aca se vienen los usuarios perrito malvado<h1>")
});

module.exports = router;
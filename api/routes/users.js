const router = require('express').Router();

router.get('/', function (req, res) {
    res.send("<h1>Users route<h1>")
});

module.exports = router;
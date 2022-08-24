const router = require('express').Router();

const { postUser, getUsers, deleteUser, updateUser } = require('../controllers/users')


router.get('/', function (req, res) {
    res.send("<h1>Users route<h1>")
});

router.post('/post-user', postUser);

router.put('/update-user/:id', updateUser)

router.get('/get-users', getUsers);

router.delete('/delete-user/:id', deleteUser);

module.exports = router;
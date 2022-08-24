const User = require('../models/user');
const userController = {};

userController.postUser = async (req, res, next) => {
    try {
        const { uniqueUserName, userName, email, password } = req.body;
        const newUser = new User({ uniqueUserName, userName, email, password })
        await newUser.save()
        return res.status(200).json(newUser)
    }
    catch (error) {
        next(error);
    }
}

userController.getUsers = async (_req, res, next) => {
    try {
        const allUsers = await User.find();
        res.status(200).send(allUsers)
    }
    catch (error) {
        next(error)
    }
}

userController.deleteUser = async (req, res, next) => {
    try {
        deleted = await User.findById(req.params.id)
        await User.findByIdAndDelete(req.params.id);
        return res.send(`${deleted.uniqueUserName} deleted`)
    }
    catch (error) {
        next(error)
    }
}

userController.updateUser = async (req, res, next) => {
    try {
        const { uniqueUserName, userName, email, password } = req.body;
        await User.findByIdAndUpdate(req.params.id, { uniqueUserName, userName, email, password })
        res.status(200).send(`'User updated'`)
    }
    catch (error) {
        next(error)
    }
}

module.exports = userController;
const User = require('../models/user');
const userController = {};

userController.postUser = async (req, res) => {
    try {
        const { uniqueUserName, userName, email, password } = req.body;
        const userNameCheck = await User.find({ uniqueUserName: uniqueUserName });
        const mailCheck = await User.find({ email: email })
        const passwordCheck = await User.find({ password: password })
        if (userNameCheck.length > 0) {
            res.json({ msg: 'username already exist!' })
        }
        else if (mailCheck.length > 0) {
            res.json({ msg: 'email already exist!' })
        }
        else if (passwordCheck.length > 0) {
            res.json({ msg: 'password already exist!' })
        }
        else {
            const newUser = new User({ uniqueUserName, userName, email, password })
            await newUser.save()
            return res.status(200).json(newUser)
        }
    }
    catch (error) {
        res.send(error);
    }
}

userController.getUsers = async (_req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).send(allUsers)
    }
    catch (error) {
        res.send(error);
    }
}

userController.deleteUser = async (req, res) => {
    try {
        deleted = await User.findById(req.params.id)
        await User.findByIdAndDelete(req.params.id);
        return res.send(`${deleted.uniqueUserName} deleted`)
    }
    catch (error) {
        res.send(error);
    }
}

userController.updateUser = async (req, res) => {
    try {
        const { uniqueUserName, userName, email, password } = req.body;

        const userNameCheck = await User.find({ uniqueUserName: uniqueUserName });
        const mailCheck = await User.find({ email: email });
        const passwordCheck = await User.find({ password: password });

        if (userNameCheck.length > 0 && userNameCheck[0].id !== req.params.id) {
            res.json({ msg: 'username already exist!' })
        }
        else if (mailCheck.length > 0 && mailCheck[0].id !== req.params.id) {
            res.json({ msg: 'mail already exist!' })
        }
        else if (passwordCheck.length > 0 && passwordCheck[0].id !== req.params.id) {
            res.json({ msg: 'password already exist!' })
        }
        else {
            await User.findByIdAndUpdate(req.params.id, { uniqueUserName, userName, email, password })
            res.status(200).send('User updated!')
        }
    }

    catch (error) {
        res.send(error);
    }
}

module.exports = userController;
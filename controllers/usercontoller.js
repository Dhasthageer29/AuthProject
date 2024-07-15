const userService = require('../services/userService');

const renderIndex = (req, res) => {
    res.render('index');
};

const register = async (req, res) => {
    try {
        const { name, email, password, gender } = req.body;
        const userCreated = await userService.registerUser({ name, email, password, gender });
        res.send(userCreated);
    } catch (error) {
        console.error(error);
    }
};

const renderLogin = (req, res) => {
    res.render('login');
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const message = await userService.loginUser({ email, password });
        res.send(message);
    } catch (error) {
        console.error(error);
    }
};

const renderDelete = (req, res) => {
    res.render('delete');
};

const deleteUser = async (req, res) => {
    try {
        const { username } = req.body;
        const deleteUser = await userService.deleteUser(username);
        res.send(deleteUser);
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    renderIndex,
    register,
    renderLogin,
    login,
    renderDelete,
    deleteUser
};

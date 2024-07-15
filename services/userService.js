const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const registerUser = async ({ name, email, password, gender }) => {
    const salt = await bcrypt.genSalt(10);
    console.log(salt)
    const hash = await bcrypt.hash(password, salt);
    console.log(hash)
    const userCreated = await userModel.create({
        name,
        email,
        password: hash,
        gender
    });
    return userCreated;
};

const loginUser = async ({ email, password }) => {
    const user = await userModel.findOne({ email });
    if (!user) return "Your email is wrong";

    const result = await bcrypt.compare(password, user.password);
    return result ? "Login success" : "Your password is wrong";
};

const deleteUser = async (username) => {
    const user = await userModel.findOneAndDelete({ name: username });
    return user;
};

module.exports = {
    registerUser,
    loginUser,
    deleteUser
};

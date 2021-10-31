const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});

        if (!user) throw Error("User not found");
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error("User/password doesn't match");

        const userTemplate = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email
        };

        const token = jwt.sign(userTemplate, process.env.JWT_SECRET);
        if (!token) throw Error("Something critical happened");

        res.status(200).json({
            token,
            user: userTemplate
        })

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        const user = await User.findOne({email});

        if (user) throw Error("User already exists");

        const salt = await bcrypt.genSalt(10);
        if (!salt) throw Error("Critical error");
        const hashedPwd = await bcrypt.hash(password, salt)
        if (!hashedPwd) throw Error("Critical error");

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPwd
        });

        const savedUser = await newUser.save();

        if (!savedUser) throw Error("Critical error");
        
        res.status(200).json({
            message: "User created successfully"
        })

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
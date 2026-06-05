const { UsersModel } = require("../models/UsersModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res) => {
    const { username, mobile, password } = req.body;

    try {
        const existingUser = await UsersModel.findOne({ mobile });
        if (existingUser) {
            return res.json({ error: "User already exists" });
        }
        const newUser = new UsersModel({ username, mobile, password });
        
        const token = createSecretToken(newUser._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        await newUser.save();
        res.status(201).json({ success: true, message: "User created successfully", token   });
        console.log("User created successfully");
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
};


module.exports.Login = async (req, res) => {
    try {
    const { mobile, password } = req.body;
    if(!mobile || !password){
        return res.json({error: "Please enter all the details"});
    };
    const user = await UsersModel.findOne({ mobile });
    if(!user){
        return res.json({error: "User not found"});
    };
    const auth = await bcrypt.compare(password, user.password);
    if (!auth){
        return res.json({error: "Incorrect password"});
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
    });
    res.status(200).json({ success: true, message: "Login successful", userId: user._id, token });
    console.log("Login successful");
} catch (err) {
    console.error("Error during login:", err);
}
};

module.exports.Logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(200).json({ success: true, message: "Logout successful" });
        console.log("Logout successful");
    } catch (err) {
        console.error("Error during logout:", err);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
};


const User = require("../model/userModel");
const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY; // .env se secret key le

const createUser = async (req, res) => {
    let data = req.body;

    let newUser = await new User(data).save();
    console.log(newUser)
    res.send(newUser);
};






const loginUser = async (req, res) => {
    const data = req.body;

    try {
        // Check for existing user
        const existingUser = await User.findOne({ username: data.username });
        if (!existingUser) {
            return res.status(400).json({ error: "User not found" });
        }

        // Directly compare the password (not recommended for production)
        if (existingUser.password !== data.password) {
            return res.status(400).json({ error: "Invalid password" });
        }

        // Generate token 
        
        const token = jwt.sign({ id: existingUser._id }, process.env.SECRET_KEY,{expiresIn:"1d"})


           const userdata = {
            username : existingUser.username,
            token:token
           }     

        // res.status(200).json({ token:token, user: existingUser.username });

        res.status(200).json(userdata)
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};




const getAlluser = async (req, res) => {
    let userData = await User.find()
    res.send(userData);

}

module.exports = { loginUser, createUser, getAlluser }
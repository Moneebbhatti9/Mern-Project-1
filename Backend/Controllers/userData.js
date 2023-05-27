const asynchandler = require("express-async-handler")
const User = require("../Model/userModal")


const userData = asynchandler(async (req, res) => {
    const { firstName, lastName, email, services, phone, address } = req.body;

    const newUser = await User.create({
        firstName,
        lastName,
        email,
        services,
        phone,
        address,
    })

    if (newUser) {
        res.status(201).json({
            newUser
        })
    }else{
        res.status(400)
        throw new Error ("Can not posted ...");
    }


})

module.exports = { userData }
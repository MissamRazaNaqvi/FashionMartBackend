const User = require("../schema/userSchema")
const jwt = require('jsonwebtoken');
module.exports.createUser = async (req, res) => {
    let newUserdata = req.body
    // console.log("New user Registration :  ", newUserdata)
    const newUser = new User(newUserdata)
    try {
        await newUser.save()
    } catch (error) {
        console.log(error.message)
    }
}
module.exports.login = async (req, res) => {
    let { loginData } = req.body
    // console.log('data from frontend', loginData)
    const result = await User.findOne({ email: loginData.email }).then((user) => {
        if (user) {
            if (user.password == loginData.password) {
                // console.log('success')
                const token = jwt.sign({ id: user.id }, "authtoken")
                // console.log(token);
                return res.cookie('authtoken', token, { expires: new Date(Date.now() + 25892000000), httpOnly: true }).json({ statusText: 'OK' })
            }
            else {
                console.log('Not Allowed')
                res.send({ 'statusText': 'false' })
            }
        }
        else {
            console.log('user not found')
            res.send({ 'statusText': 'false' })
        }
    })
}

module.exports.verifytoken = async (req, res, next) => {
    const { authtoken } = req.cookies
    if (authtoken) {
        try {
            const { id } = jwt.verify(authtoken, "authtoken")
            const user = await User.findOne({ _id: id });
            if (user) {
                res.send(true)
                // console.log("user data ", user)
            } else {
                res.send(false)
                console.log("false")
            }
        } catch (error) {
            console.log(error.message)
            res.send(false)
        }
    }
    else {
        res.send(false)
    }
}
module.exports.verifyadmin = async (req, res, next) => {
    const { authtoken } = req.cookies
    if (authtoken) {
        try {
            const { id } = jwt.verify(authtoken, "authtoken")
            const user = await User.findOne({ _id: id });
            if (user.role == "admin") {
                res.send(true)
            } else {
                res.send(false)
                // console.log("false")
            }
        } catch (error) {
            console.log(error.message)
            res.send(false)
        }
    }
    else {
        res.send(false)
    }
}
module.exports.logout = async (req, res) => {
    res.clearCookie('authtoken')
    res.send('logout')
}
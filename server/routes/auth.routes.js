const Router = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const router = new Router()

router.post('/registration', 
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', "Password must not be shorter than 8 and longer than 30").isLength({min: 8, max: 30})
    ],
    async (req, res) => {
        try {
            console.log(req.body)
            const errors = validationResult(req);

            if(!errors.isEmpty()) {
                return res.status(400).json({message: "Incorrect request", errors})
            }

            const {email, password} = req.body;

            const candidate = await User.findOne({email});

            if(candidate) {
                return res.status(400).json({message: `User with email ${email} already exists`})
            }
            const hashPassword = await bcrypt.hash(password, 15)
            const user = new User({email, password: hashPassword})
            await user.save()
            return res.json({message: 'User was created'})
        } catch(e) {
            console.log(e)
            res.send({message: "Server error"})
        }
})

module.exports = router
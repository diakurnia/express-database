const express = require('express')
const router = express.Router()
const User = require('../models/user')
const helper = require('./helper')

// GEt all subscribers
router.get('/', async (req,res) => {
    try{
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//list one user
router.get('/:id',helper, (req,res) => {
    res.json(res.user)
})

// create a new user

router.post('/', async (req,res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email  
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err){
        res.status(400).json({message:err.message})
    }
})

//update a user

router.patch('/:id', (req,res) => {
    
})

module.exports = router

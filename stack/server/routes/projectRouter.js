const express = require('express') //Importing a express for router 
const router = express.Router(); 
const projects = require('../model/projectModel')

router.get('/all',async(req,res) => { // To get all request and response
    try {
        const fetchedproject = await projects.find() // Finding a collections
        res.json(fetchedproject).status(200) // Printing a status
        
    } catch (error) {
        res.json(error).status(500)
    }
})

router.post('/add',async(req,res) => {
    try {
        const newproject = await projects(req.body)
        // Checking the value is null
        const {name ,email } = newproject
        if(name || email)
        {
            res.json({message:"Both are required"}).status(500)
        }

        await projects.create()
        res.json({message:"add"}).status(201)
        
    } catch (error) {
        res.json(error).status(500)
    }
})

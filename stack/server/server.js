console.log("Hello word");  // Checking 

require('dotenv').config()  // Load a environmental Variable
const express = require('express')  // Importing Express FrameWork
const dbconn = require('./config/db')   // Connecting a custom db connection modle
const projects = require('./routes/projectRouter')

const app = express()   // Start the Express Framework
app.use(express.json())     // Middleware to parse incoming JSON requests and  making it easy to handle JSON-formatted data sent from clients.

// app.use('/projectsroute',projects)
app.use('/projects',projects)
// const projects = require('./routes/projectRouter') // Load a Project router

const port = process.env.PORT || 7777   // Sets the port from environment variable or defaults to 7777

app.get('/',(req,res) => {   // When a client accesses the server at the root path
    res.status(200).json({message:"Welcome To My Drama"})   // the server responds with a JSON object: { message: "Welcome To My Drama" }
})

app.listen(port,() => { 
    console.log(`Server running on the Port:${port}`)   // If it listening means printing a console text
})
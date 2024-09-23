const express = require('express')
const app = express()
const dbconn = require('./config/db')
require('dotenv').config()

const projectSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
    }
})

const projects = mongoose.model("projects",projectSchema)
module.exports = projects;
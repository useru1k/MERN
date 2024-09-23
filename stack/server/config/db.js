const mongoose = require('mongoose')    // Importing mongoose to interact with MongoDB

// Connecting to MongoDB 
mongoose.connect(process.env.MONGO || "mongodb+srv://uvvi571:IPL2024YK@cluster0-in.thhrq.mongodb.net/")

const connnection = mongoose.connection;  // Connection and access to DB

connnection.on('connected', () => {
    console.log('DB connect') // It print the Text, If DB is Connected
})

connnection.on('error', () => {
    console.log('DB error') // It print the Text, If DB is not Connected
})
module.exports = mongoose // it can be used in other parts of the application to define schemas, models, and perform database operations
const mongoose = require('mongoose'); // Importing mongoose to interact with MongoDB

// Connecting to MongoDB 
mongoose.connect(process.env.MONGOURL || "mongodb+srv://uvvi571:password@cluster0-in.thhrq.mongodb.net/");

const connection = mongoose.connection; // Corrected typo from connnection to connection

connection.on('connected', () => {
    console.log('DB connected'); // Prints when DB is connected
});

connection.on('error', (error) => {
    console.error('DB connection error:', error); // Improved error logging
});

module.exports = mongoose; // Exporting mongoose for use in other files
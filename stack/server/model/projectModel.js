const mongoose = require('mongoose'); // Importing Mongoose for schema creation

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
});

const projects = mongoose.model("projects", projectSchema);
module.exports = projects;

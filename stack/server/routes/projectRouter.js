const express = require('express'); // Importing express for router 
const router = express.Router(); 
router.use(express.json())
const projects = require('../model/projectModel');

router.get('/all', async (req, res) => {
    try {
        const fetchedProjects = await projects.find(); // Finding all documents
        res.status(200).json(fetchedProjects); // Correct order of status and json
    } catch (error) {
        res.status(500).json({ error: error.message }); // Improved error response
    }
});

router.post('/add', async (req, res) => {
    try {
        const newProject = await projects(req.body); // Creating a new project
        const { title, desc } = newProject;
        if (!title || !desc) {
            return res.status(400).json({ message: "Both name and email are required" });
        }
        await newProject.save(); // Save the new project to the database
        res.status(201).json({ message: "Project added successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const world = await projects.findOne({ _id: id })
        if (!world) {
            res.status(404).json({ message: "Project not found !" })
        }
        const deleteProject = await projects.findByIdAndDelete(id)
        res.status(200).json({ message: "Project Deleted !" })
    } catch (e) {
        res.status(500).json(error)
    }
})

module.exports = router;
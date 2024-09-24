import React, { useState } from 'react';

function Projectss() {
    // Initial project data
    const initialProjects = [
        {
            title: "Signature Less Ransomware Detection using LSTM",
            description: "Detecting a file or text is a Ransomware or Not",
            link: "https://example.com/project1",
        },
        {
            title: "DeepFake Detection Using CNN",
            description: "Detecting a image is DeepFake or Not",
            link: "https://example.com/project2",
        },
        {
            title: "Web Application Penetration Testing",
            description: "Performed penetration testing on a web application, identifying critical vulnerabilities and recommending fixes.",
            link: "https://example.com/project3",
        },
    ];

    // State for projects and form inputs
    const [projects, setProjects] = useState(initialProjects);
    const [newProject, setNewProject] = useState({ title: '', description: '', link: '' });

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProject(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newProject.title && newProject.description && newProject.link) {
            setProjects([...projects, newProject]);
            setNewProject({ title: '', description: '', link: '' }); // Reset form
        }
    };

    return (
        <section id="projects" className="w-90 p-10 bg-gray-50 flex flex-col">
            <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>

            {/* Form to add new project */}
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="title"
                        value={newProject.title}
                        onChange={handleChange}
                        placeholder="Project Title"
                        className="p-2 border rounded"
                        required
                    />
                    <textarea
                        name="description"
                        value={newProject.description}
                        onChange={handleChange}
                        placeholder="Project Description"
                        className="p-2 border rounded"
                        required
                    />
                    <input
                        type="url"
                        name="link"
                        value={newProject.link}
                        onChange={handleChange}
                        placeholder="Project Link"
                        className="p-2 border rounded"
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Add Project
                    </button>
                </div>
            </form>

            <div className="flex flex-col gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                        <p className="text-gray-700 mt-2">{project.description}</p>
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-4 inline-block text-blue-500 hover:underline"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projectss;

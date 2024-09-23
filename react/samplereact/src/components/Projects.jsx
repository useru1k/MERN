function Projects() {
    const projectData = [
        {
            title: "Cybersecurity Tool Development",
            description: "Developed a tool for vulnerability scanning and analysis to help organizations identify security weaknesses.",
            link: "https://example.com/project1",
        },
        {
            title: "Network Security Audit",
            description: "Conducted a comprehensive audit of network security protocols for a local business, improving their overall security posture.",
            link: "https://example.com/project2",
        },
        {
            title: "Web Application Penetration Testing",
            description: "Performed penetration testing on a web application, identifying critical vulnerabilities and recommending fixes.",
            link: "https://example.com/project3",
        },
        // Add more projects as needed
    ];

    return (
        <section id="projects" className="w-screen p-10 bg-gray-100 flex flex-col">
            <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
            
            <div className="flex flex-col gap-6">
                {projectData.map((project, index) => (
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

export default Projects;

function Projects() {
    const projectData = [
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
        // Add more projects as needed
    ];

    return (
        <section id="projects" className="w-screen p-10 bg-gray-50 flex flex-col">
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

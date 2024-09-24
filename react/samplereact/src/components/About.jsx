function About() {
  return (
      <section id="about" className="h-[87vh] w-screen p-10 bg-gray-50 flex flex-col">
          <h1 className="text-3xl font-bold text-center mb-8">About Me</h1>
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex flex-col items-center text-center md:w-1/3">
                  <img
                      src="./src/assets/img/education.png"
                      alt="Education"
                      className="w-16 h-16 mb-3"
                  />
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-gray-600">12th Grade<br />BE. CYBERSECURITY</p>
              </div>

              <div className="text-center md:text-left md:w-2/3">
                  <p className="text-lg text-gray-700">
                      I am currently studying in a cybersecurity-related field, focusing on building a strong foundation in areas like network security, vulnerability assessments, and penetration testing. My passion lies in understanding the evolving landscape of cyber threats and exploring advanced techniques for safeguarding digital infrastructures.
                  </p>
              </div>
          </div>
          
          <div className="flex flex-col items-center mt-10">
              <h2 className="text-xl font-semibold">Skills</h2>
              <div className="flex justify-center mt-4 space-x-4">
                  <i className="fa-brands fa-linux text-2xl" title="Linux"></i>
                  <i className="fa-brands fa-golang  text-2xl" title="GO-Lang"></i>
                  <i className="fa-brands fa-c text-2xl" title="C"></i>
                  <i className="fa-brands fa-python text-2xl" title="Python"></i>
                  <i className="fa-brands fa-github text-2xl" title="GitHub"></i>
                  <i className="fa-brands fa-java text-2xl" title="Java"></i>
                  <i className="fa-brands fa-react text-2xl" title="React"></i>
                  <i className="fa-brands fa-git text-2xl" title="Git"></i>
              </div>
          </div>
      </section>
  );
}

export default About;

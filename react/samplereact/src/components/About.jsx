function About() {
    return (
      <section id="about" className="h-[87vh] w-screen p-10 bg-gray-50 flex flex-col">
        {/* <div><p className="flex justify-start text-center text-lg font-medium">Get To Know More</p></div> */}
        <div><h1 className="flex justify-center text-center text-3xl font-bold mb-6">About Me</h1></div>
        <div className="flex flex-col justify-center md:flex-row gap-8 items-center">
          <div className="flex justify-center flex-col items-center text-center">
            <img
              src="./src/assets/img/education.png"
              alt="Education"
              className="w-12 h-12 mb-2"
            />
            <h3 className="text-xl font-semibold">Education</h3>
            <p>12th Grade<br />BE. CYBERSECURITY</p>
          </div>
          <div className="text-center md:text-left max-w-lg">
            <p>
              I am currently studying in a cybersecurity-related field, where I focus on developing a strong foundation in areas such as network security, vulnerability assessments, and penetration testing. My passion lies in understanding the evolving landscape of cyber threats and exploring advanced techniques for safeguarding digital infrastructures.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  
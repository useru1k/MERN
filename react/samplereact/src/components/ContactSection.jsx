function ContactSection() {
    return (
      <section id="contact" className="p-10">
        <p className="text-center text-lg font-medium">Get in Touch</p>
        <h1 className="text-center text-3xl font-bold mb-6">Contact Me</h1>
        <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
          <div className="flex items-center gap-4">
            <img
              src="./src/assets/img/email.png"
              alt="Email"
              className="w-8 h-8"
            />
            <p><a href="mailto:uvvi571@gmail.com">uvvi571@gmail.com</a></p>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="./src/assets/img/linkedin.png"
              alt="LinkedIn"
              className="w-8 h-8"
            />
            <p><a href="https://www.linkedin.com">LinkedIn</a></p>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="./src/assets/img/github.png"
              alt="GitHub"
              className="w-8 h-8"
            />
            <p><a href="https://github.com/useru1k">GitHub</a></p>
          </div>
        </div>
      </section>
    );
  }
  
  export default ContactSection;
  
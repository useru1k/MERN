import Navbar from "../components/Navbar";
function Contact(){
    return(
        <>
        <Navbar />
        <section id="contact" className="flex justify-start flex-col gap-5 w-screen h-[90vh]">
            <div>
            <p className="text-2xl">Get in Touch</p>
            <h1 className="text-3xl">Contact Me</h1>
            </div>
            <div className="contact-info-1 flex justify-center flex-col">
                <div className="contact-info-2 w-10 h-10 ">
                <img src="./src/assets/img/email.png" alt="Email icon" className="icon contact-icon email-icon" />
                <p><a href="mailto:uvvi571@gmail.com">uvvi571@gmail.com</a></p>
                {/* <div className="contact-info-2 w-10 h-10"> */}
                <img src="./src/assets/img/linkedin.png" alt="LinkedIn icon" className="icon contact-icon" />
                <p><a href="https://www.linkedin.com">LinkedIn</a></p>
                {/* </div> */}
                {/* <div className="contact-info-2 w-10 h-10" /> */}
                <img src="./src/assets/img/github.png" alt="LinkedIn icon" className="icon contact-icon" />
                <p><a href="https://www.github.com/useru1k">Github</a></p>
            </div>
            </div>
        </section>

        </>
    )
}

export default Contact;
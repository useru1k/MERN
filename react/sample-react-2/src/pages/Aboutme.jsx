import Navbar from "../components/Navbar";

function Aboutme(){
    return(
        <>
            <Navbar />
            <div className="flex justify-center flex-col gap-3">
                <div className="flex justify-start pt-10 pl-3">
                    <h1 className="text-5xl pb-2 font-extralight">About Me</h1>
                </div>
                <div className="text-1xl mx-6 font-thin">
                    <p>I am currently studying in a cybersecurity-related field, where I focus on developing a strong foundation in areas such as network security, vulnerability assessments, and penetration testing. My passion lies in understanding the evolving landscape of cyber threats and exploring advanced techniques for safeguarding digital infrastructures.
                    </p>
                </div>
            </div>
        </>
    )
}
export default Aboutme;
import Navbar from "../components/Navbar";

function Aboutme() {
  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-col items-center gap-6 px-4 py-10">
        <div className=" max-w-3xl">
          <h1 className="text-5xl font-extralight text-gray-800 mb-4 border-b pb-2 border-gray-300">
            About Me
          </h1>
          <p className="text-lg font-thin text-gray-700 leading-relaxed">
            I am currently studying in a cybersecurity-related field, where I focus on developing a strong foundation in areas such as network security, vulnerability assessments, and penetration testing. My passion lies in understanding the evolving landscape of cyber threats and exploring advanced techniques for safeguarding digital infrastructures.
          </p>
        </div>
      </div>
    </>
  );
}

export default Aboutme;

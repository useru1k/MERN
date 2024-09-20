function Profile() {
    return (
      <section
        id="profile"
        className="h-[80vh] w-screen flex flex-col md:flex-row justify-center items-center gap-12 p-12"
      >
        <div className="w-72 h-72 md:w-80 md:h-80">
          <img
            src="./src/assets/img/profile2.jpeg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="text-center md:text-left max-w-md">
          <p className="text-2xl font-semibold">Hello, I'm</p>
          <h1 className="text-5xl font-bold mt-2">Yuvan Krishna P</h1>
          <p className="text-2xl mt-4">Cybersecurity Enthusiast</p>
          {/* <div className="mt-6 flex justify-center md:justify-start gap-6">
            <button className="btn btn-color  py-2 text-lg font-medium">
              Contact Info
            </button>
          </div> */}
          <div className="mt-6 flex justify-center md:justify-start gap-6">
            <img
              src="./src/assets/img/linkedin.png"
              alt="LinkedIn"
              className="w-10 h-10 cursor-pointer"
              onClick={() => window.location.href = 'https://linkedin.com'}
            />
            <img
              src="./src/assets/img/github.png"
              alt="GitHub"
              className="w-10 h-10 cursor-pointer"
              onClick={() => window.location.href = 'https://github.com/useru1k'}
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default Profile;
  
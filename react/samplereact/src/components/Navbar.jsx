function Navbar(){
    return(
        <>
        <nav className="w-screen h-11 flex justify-around flex-row items-center bg-slate-300">
        <div className="text-2xl font-mono">Yuvan krishna</div>
        <div className="flex">
            <ul className="flex flex-row space-x-8 font-mono"> 
                <li><a href="#about">About Me</a></li>
                <li><a href="#skill">Skill</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </div>
    </nav>
        </>
    )
}
export default Navbar;
function Navbar(){
    return(
        <>
            <nav className="w-screen h-[10vh] flex justify-around flex-row items-center rounded-sm bg-slate-300 shadow-lg">
                <div className="text-2xl font-bold flex justify-start">Yuvan krishna</div>
                    <div className="flex justify-end"> 
                        <ul className="flex flex-row font-semibold space-x-8 font-mono "> 
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
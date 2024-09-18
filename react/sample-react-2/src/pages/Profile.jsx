import React from 'react';

function Profile() {
    return (
        <section className="flex justify-center items-center h-[90vh] w-screen bg-slate-500 px-10">
            <div className="flex flex-row gap-5 items-center">
                <div className="flex h-[400px] w-[400px] mr-10">
                    <img src="./src/assets/img/profile2.jpeg" alt="Profile Photo" className="rounded-full h-full w-full object-cover" />
                </div>
                <div className="flex flex-col items-center text-center gap-3 ml-20">
                    <p className="text-3xl font-semibold">Hello, I’m</p>
                    <h1 className="text-5xl font-bold">Yuvan Krishna P</h1>
                    <p className="text-2xl">Cybersecurity Enthusiast</p>
                </div>
            </div>
        </section>
    );
}

export default Profile;

import React from "react";
import { NavLink } from "react-router-dom";

function AboutPage() {
    return (
        <>
       
        
         <NavLink to="/" className="text-2xl text-violet-600 block mb-4 hover:text-purple">Home</NavLink>
         <h1 className="text-3xl text-violet-600 mb-8 text-center hover:text-purple">About Us</h1>
         
       {/* Grid - Cards */}
       <div className="bg-gradient-to-r from-violet-500">
            <div className="max-w-4xl mx-auto p-4">
                {/* Grid - Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >

                    {/* Card 1 */}
                    <div className="p-6 bg-white rounded-3xl flex flex-col justify-evenly">
                        <div className="rounded-3xl overflow-hidden mb-4">
                            <img src="https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?cs=srgb&dl=pexels-pixabay-301599.jpg&fm=jpg" alt="Person 1" />
                        </div>
                        <div>
                            <h5 className="text-2xl md:text-3xl font-medium">Hari M</h5>
                            <p className="text-slate-500 text-lg mt-2">Hari is a passionate web developer with a keen interest in building intuitive and user-friendly applications. With years of experience in frontend development, Hari specializes in React.js and enjoys experimenting with new technologies to create innovative solutions.</p>
                        </div>
                        <a href="https://github.com/Haripriya2327" className="text-center bg-violet-300 text-violet-700 py-2 rounded-lg font-semibold mt-4 hover:bg-violet-300 focus:scale-95 transition-all duration-200 ease-out">GitHub</a>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 bg-white rounded-3xl flex flex-col justify-between">
                        <div className="rounded-3xl overflow-hidden mb-4">
                            <img src="https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?cs=srgb&dl=pexels-pixabay-301599.jpg&fm=jpg" alt="Person 2" />
                        </div>
                        <div>
                            <h5 className="text-2xl md:text-3xl font-medium">Tesa M</h5>
                            <p className="text-slate-500 text-lg mt-2">Tesa is a Full-Stack dev with a passion for crafting robust and efficient web applications. She finds solace in the pages of a captivating book, cherishes the tranquility of her daily walks, and holds an unyielding affection for her beloved cat, Toby..</p>
                        </div>
                        <a href="https://github.com/TesaMusa" target="_blank" rel="noopener noreferrer" className="text-center bg-violet-300 text-violet-700 py-2 rounded-lg font-semibold mt-4 hover:bg-violet-300 focus:scale-95 transition-all duration-200 ease-out">GitHub</a>
                    </div>

                </div>
            </div>
        </div>
        </>
    )

}

export default AboutPage;
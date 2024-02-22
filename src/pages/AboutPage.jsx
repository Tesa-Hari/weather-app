import React from "react";
import { NavLink } from "react-router-dom";
import personOne from '../assets/images/hari.jpg'
import personTwo from '../assets/images/tesa2.png'

function AboutPage() {
    return (
        <>


            <div>
                <NavLink to="/" className="text-2xl text-violet-600 block mb-4 hover:text-purple">Home</NavLink>
                <h1 className="text-3xl text-violet-600 mb-8 text-center hover:text-purple">About Us</h1>
            </div>


            <div className="container mx-auto">
                <div className="flex  justify-center">

                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img src={personOne} className="w-full h-50 object-cover" alt="profile-picture" />
                            <div className="p-6">
                                <h5 className="text-xl font-semibold mb-2 text-purple-500 text-center">Hari M</h5>
                                <p className="text-gray-700 mb-4 text-center text-purple-500" >Co-Founder of Weather Wise App.</p>

                                <p className="text-center"><a href="https://github.com/Haripriya2327" className="text-purple-500"> GitHub</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img src={personTwo} className="w-full h-50 object-cover" alt="profile-picture" />
                            <div className="p-6">
                                <h5 className="text-xl font-semibold mb-2 text-purple-500 text-center">Tesa M</h5>
                                <p className="text-gray-700 mb-4 text-purple-500 text-center">Co-Founder of Weather Wise App.</p>

                                <p className="text-center"><a href="https://github.com/TesaMusa" className="text-purple-500"> GitHub</a>
                                </p>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default AboutPage;
// import rea from "react";
import Daily from "../components/Daily";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/cast.png'
import Banner from "./BannerPage";
import Footer from "./Footer";
function HomePage() {


    return (


        <>
    <nav className="top-20 w-full bg-white dark:bg-black z-50 py-[38px] px-0 flex justify-center">
    <img src={logo} alt="Logo" className="h-8 mr-4" /> 
    <NavLink to="/" className="text-lg font-normal leading-8 text-purple-300 hover:bg-gray-200 hover:text-gray mr-4">Home | </NavLink>
    <NavLink to="/about" className="text-lg font-normal leading-8 text-purple-300 hover:bg-gray-200 hover:text-gray mr-4">About | </NavLink>
    <NavLink to="/daily" className="text-lg font-normal leading-8 text-purple-300 hover:bg-gray-200 hover:text-gray mr-4">Daily | </NavLink>
    <NavLink to="/weekly" className="text-lg font-normal leading-8 text-purple-300 hover:bg-gray-200 hover:text-gray">Weekly</NavLink>
</nav>


<Banner  >

</Banner>



            {/* <Header /> */}

            {/* Navbar */}
            {/* Location button with all locations */}
            {/* <Daily /> */}
            {/* Weekly */}
            {/* Footer */}
         
            <h1>Homepage is rendered</h1>

            <Footer />
        </>
    )
}

export default HomePage;
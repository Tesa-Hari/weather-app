// import rea from "react";
import { useState } from "react";
import Daily from "../components/Daily";
import { NavLink, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/cast.png'
import Banner from "./BannerPage";
import Location from "../components/Location";
import Footer from "./Footer";
import Weekly from "../components/Weekly";
import ModifyWeekly from "../components/CreateWeekly";
function HomePage() {

    const [locationId, setLocationId] = useState(1);
    const location = useLocation();
    console.log("Location is",location.state);
    //bug
    // if(location.state)
    // {
    //   selectLocation(location.state);
    // }
    // else{
    //     selectLocation(1);
    // }
    function selectLocation(id) {
        setLocationId(id);
    }

    return (
        <>
            <nav className="flex flex-wrap items-center justify-center sm:justify-start">
                <img src="{logo}" alt="Logo" className="h-8 mr-4" /> 
                <NavLink to="/" className="text-sm font-semibold leading-6 text-gray-900 mr-4">Home | </NavLink>
                <NavLink to="/about" className="text-sm font-semibold leading-6 text-gray-900 mr-4">About | </NavLink>
                <NavLink to="/createweekly/" className="text-sm font-semibold leading-6 text-gray-900 mr-4">Create Weekly | </NavLink>
                
            </nav>

            <Location callBackLocation={selectLocation} />

            <Banner></Banner>
            <Daily locationId={locationId} />
            <Weekly locationId={locationId} />

         <Footer />
        </>
    )
}
export default HomePage;
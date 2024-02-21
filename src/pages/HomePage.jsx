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
    const [isToday, setIsToday] = useState(true);
    // console.log("Location is",location.state);
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
        <section className="w-full text-lg flex flex-col flex-wrap sm:flex-nowrap py-1 flex-grow">
            <nav className="w-fixed w-full flex-shrink flex-grow-0 px-4">
                <div className=" flex flex-row flex-wrap justify-between sticky top-0 p-3 w-full h-full">
                <div className=" flex flex-row flex-wrap">
                <img src="{logo}" alt="Logo" className="h-8 mr-4" /><span className="text-blue-500">WeatherWise</span> 
                </div>
                <div className="text-lg font-semibold leading-6 text-gray-900">
                <NavLink to="/" className="mr-4" >Home </NavLink>
                <NavLink to="/about" className="mr-4">About  </NavLink>
                <NavLink to="/createweekly/" className="mr-4">Add Forecast </NavLink>  
                </div>
                <Location callBackLocation={selectLocation} />
                </div>
            </nav> 
            <Banner locationId={locationId}></Banner>
           <div className="p-2 mt-4 mb-4"> 
            <span className="p-2" onClick={()=>{setIsToday(true);} }>Today</span>  
             <span className="p-2" onClick={()=>{setIsToday(false);}}>Weekly</span>
            {isToday ? <Daily locationId={locationId} /> :
            <Weekly locationId={locationId} />}
            </div>
         <Footer />
         </section>
        </>
    )
}
export default HomePage;
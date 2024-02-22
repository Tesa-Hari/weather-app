import { useState } from "react";
import Daily from "../components/Daily";
import { NavLink, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./BannerPage";
import Location from "../components/Location";
import Footer from "./Footer";
import Weekly from "../components/Weekly";
import seasons from '../assets/images/weather-logo.png'; 

function HomePage() {

    const [locationId, setLocationId] = useState(1);
    const location = useLocation();
    const [isToday, setIsToday] = useState(true);
    
    function selectLocation(id) {
        setLocationId(id);
        setIsToday(true);
    }


    return (
        <>
        <section className=" pl-5 pr-5  w-full text-lg flex flex-col flex-wrap sm:flex-nowrap py-1 flex-grow">
            <nav className="w-fixed w-full flex-shrink flex-grow-0 px-4">
                <div className=" flex flex-row flex-wrap justify-between sticky top-0 p-3 w-full h-full">
                <div className=" flex flex-row flex-wrap">
                <img src={seasons} alt="Logo" className="h-14 mr-4" /><span className="text-purple-500 text-3xl">Weather<span className="text-gray-500">Wise</span></span> 
                </div>
                <div className="text-lg font-semibold leading-6 text-gray-900">
                <NavLink to="/" className="mr-4  hover:text-gray-600 text-purple-400" >Home </NavLink>
                <NavLink to="/about" className="mr-4  hover:text-gray-600 text-purple-400">About  </NavLink>
                <NavLink to="/createweekly/" className="mr-4  hover:text-gray-600 text-purple-400">Add Forecast </NavLink>  
                </div>
                <Location callBackLocation={selectLocation} />
                </div>
            </nav> 
            <Banner locationId={locationId}></Banner>
           <div className="p-2 mt-4 mb-4"> 
            <button className={ isToday ? "p-3  pt-2 pb-2 text-white text-xl active:text-purple-700 bg-purple-400" : "p-3 pt-2 pb-2 text-gray-700 text-xl active:text-purple-700 bg-gray-200"} onClick={()=>{setIsToday(true);} }>Today</button>  
             <button className={ isToday ? "p-3 pt-2 pb-2 text-gray-700 text-xl active:text-purple-700 bg-gray-100" : "p-3 pt-2 pb-2 text-white text-xl active:text-purple-700 bg-purple-400"}  onClick={()=>{setIsToday(false);}}>Weekly</button>
             {isToday ? 
             <Daily locationId={locationId} /> :
            <Weekly locationId={locationId} />}
            </div>
       
         </section>
        </>
    )
}
export default HomePage;
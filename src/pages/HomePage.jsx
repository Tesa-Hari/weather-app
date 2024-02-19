// import rea from "react";
import Daily from "../components/Daily";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import logo from '../assets/images/cast.png'

function HomePage() {

    
    return (

        
        <>
       
       <nav className="flex flex-wrap items-center justify-center sm:justify-start">
      <img src= "{logo}"alt="Logo" className="h-8 mr-4" /> {/* Adjust height and margin as needed */}
      <NavLink to="/" className="text-sm font-semibold leading-6 text-gray-900 mr-4">Home | </NavLink>
      <NavLink to="/about" className="text-sm font-semibold leading-6 text-gray-900 mr-4">About | </NavLink>
      <NavLink to="/daily" className="text-sm font-semibold leading-6 text-gray-900 mr-4">Daily | </NavLink>
      <NavLink to="/weekly" className="text-sm font-semibold leading-6 text-gray-900">Weekly</NavLink>
    </nav>
         
   
  
  
        {/* Navbar */}
        {/* Location button with all locations */}
         <Daily />
         {/* Weekly */}
         {/* Footer */}
         <h1>Homepage is rendered</h1> 
        </>
    )
}

export default HomePage;
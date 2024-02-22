import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ChangeWeatherImage from "./ChangeWeatherimage";

function Weekly(props) {
    const [weeklyForeCast, setWeeklyForecast] = useState(null);
    const baseUrl = "https://weatherapi.adaptable.app";
    const locationId = props.locationId;
    const navigate  = useNavigate();

    

// Delete weekly

function deleteCard(id){
  
    // Delete
axios.delete(`${baseUrl}/weekly/${id}`)
.then(()=>{
   getWeeklyForecast();
    
})
.catch((e)=>{
    console.log("Eror ",e);
})

}

    const getWeeklyForecast =()=>{
        axios.get( `${baseUrl}/locations/${locationId}?_embed=weekly`)
        .then((response)=>{
            setWeeklyForecast(response.data);
        })
        .catch((e)=>{
            console.log(e)
        });
    };

useEffect (()=>{
    getWeeklyForecast();
},[locationId]);
console.log(weeklyForeCast)

function UpdateWeekly(weekforecast){
   
    navigate('/updateweekly',{state:weekforecast})

    console.log("forecast ...", weekforecast);
    }
    let displayTheFirstFive = null;
        if(weeklyForeCast!==null){
    
            displayTheFirstFive = weeklyForeCast.weekly.filter((el,index)=>{
                if(index<5){
                    return true;
                }
                else{
                    return false;
                }

            })
        }
   

    console.log(displayTheFirstFive);
    return (
        <>
         <section className="w-full text-lg flex flex-row justify-evenly flex-wrap sm:flex-nowrap py-1 ">
        {weeklyForeCast === null && 
        <p>getting the forecst</p> }
            { displayTheFirstFive && displayTheFirstFive.map((weekforecast,index) => {                 
                   return <div key={index}  className="m-2 text-gray-400 pt-4 bg-gray-100 h-96 rounded-full w-60 bg-gradient-to-t hover:from-purple-700 hover:to-purple-600 ">
                         {/* <img className="ml-6 w-36 h-28" src="/src/assets/images/snowing_136721.png"></img> */}
                         <ChangeWeatherImage data={weekforecast}/>
                        <div className="text-center">
                            <span className=" text-gray-500 p-2 rounded-2xl">{weekforecast.date}</span>
                           </div>
                       
                        <p className="text-5xl text-purple-600 hover:text-white text-center m-4">{weekforecast.currenttemp}°</p> 
                        <div className="flex fle-row justify-center">
                        <button   className="m-4" onClick={()=>{
                            deleteCard(weekforecast.id);
                        }}> <FontAwesomeIcon icon={faTrash} />   </button>
                        <button onClick={()=>{
                            UpdateWeekly(weekforecast);
                        }} className="m-4"> <FontAwesomeIcon icon={faEdit} /> </button>
                    </div>
                    </div>
                })}
            </section>
        </>
    )

}

export default Weekly;
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

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
         <section className="w-full text-lg  py-1 grid grid-cols-5">
        {weeklyForeCast === null && 
        <p>getting the forecst</p> }
            { displayTheFirstFive && displayTheFirstFive.map((weekforecast,index) => {                 
                   return <div key={index}  className="m-2 bg-gray-100 h-64 rounded-xl w-52 bg-gradient-to-t hover:from-purple-700 hover:via-purple-600 ">
                        <img></img>
                        <div className="text-center">
                            <span>{weekforecast.date}</span>
                           
                        </div>
                        <div className="flex flex-row justify-start align-center">
                            <span className="text-2xl ml-2 ">{weekforecast.currenttemp}</span>
                            <span className="text-xl ml-2 ">{weekforecast.rain}</span>
                        </div>
                        <p className="text-center">Rainy</p>
                        <div className="relative">
                        <button   className="absolute bottom-0 right-0" onClick={()=>{
                            deleteCard(weekforecast.id);
                        }}> <FontAwesomeIcon icon={faTrash} />   </button>
                        <button onClick={()=>{
                            UpdateWeekly(weekforecast);
                        }} className="absolute bottom-0 right-5"> <FontAwesomeIcon icon={faEdit} /> </button>
                    </div>
                    </div>
                })}
            </section>
        </>
    )

}

export default Weekly;
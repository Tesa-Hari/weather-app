import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


import '../App.css'


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


    return (
        <>
         <section>
        {weeklyForeCast === null ? <p>getting the forecst</p> : <p></p>}
            { weeklyForeCast && weeklyForeCast.weekly.map((weekforecast,index) => {
                    return <div key={index}>
                        <img></img>
                        <div>
                            <span>{weekforecast.date}</span>
                           
                        </div>
                        <div>
                            <span>{weekforecast.temperature}</span>
                            <span>{weekforecast.rain}</span>
                        </div>

                        <p>weather(sunny or rainy)</p>

                        <button  className ="delete" onClick={()=>{
                            deleteCard(weekforecast.id);
                        }}>Delete</button>
                        <button onClick={()=>{
                            UpdateWeekly(weekforecast);
                        }} className="update">Update</button>
                    </div>
                })}
            </section>
        </>
    )

}

export default Weekly;
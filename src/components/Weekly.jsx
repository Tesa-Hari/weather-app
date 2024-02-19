import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";


function Weekly() {
    const [weeklyForeCast, setWeeklyForecast] = useState(null);
    const baseUrl = "https://weatherapi.adaptable.app";
    const locationId = 1;

    const getWeeklyForecast =()=>{
        axios.get( `${baseUrl}/locations/${locationId}?_embed=weekly`)
        .then((response)=>{
            setWeeklyForecast(response.data);
        })
        .catch((err)=>{
            console.log(e)
        });
    };

useEffect (()=>{
    getWeeklyForecast();
},[]);
console.log(weeklyForeCast)


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
                            <span>{weekforecast.windspeed}</span>
                            <span>{weekforecast.rain}</span>
                        </div>
                        <p>weather(sunny or rainy)</p>
                    </div>
                })}
            </section>
        </>
    )

}

export default Weekly;
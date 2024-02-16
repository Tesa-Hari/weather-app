import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

function Daily() {

    const [dailyForecast, setDailyForecast] = useState();
    const baseUrl = "https://weatherapi.adaptable.app"
    const locationId = 1;

    useEffect(() => {
        axios.get(`${baseUrl}/locations/${locationId}?_embed=daily`)
            .then((response) => {
                setDailyForecast(response.data);    
            })
            .catch((e) => {
                console.log(e);
            })
    },[]);

    const arr = dailyForecast;
    console.log(arr)
  
    return (
        <>
        
            {/* <section>
                {dailyForecast.daily.map((daily)=>{
                <div>
                    <img></img>
                    <div>
                        <span>{daily.date}</span>
                        <span>{daily.hour}</span>
                    </div>
                    <div>
                        <span>{daily.windspeed}</span>
                        <span>{daily.rain}</span>
                    </div>
                    <p>weather(sunny or rainy)</p>
                </div>})}
            </section> */}
        </>
    );
}

export default Daily;
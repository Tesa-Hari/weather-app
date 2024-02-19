import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

function Daily(props) {

    const [dailyForecast, setDailyForecast] = useState(null);
    const baseUrl = "https://weatherapi.adaptable.app"
    const locationId = props.locationId;

    useEffect(() => {
        axios.get(`${baseUrl}/locations/${locationId}?_embed=daily`)
        .then((response) => {
            setDailyForecast(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
    }, [locationId]);
    console.log(dailyForecast);
    return (
        <>
            <section>
                {dailyForecast === null ? <p>getting the forecst</p> : <p></p>}
                {dailyForecast && dailyForecast.daily.map((forecast, index) => {
                    return <div key={index}>
                        <img></img>
                        <div>
                            <span>{forecast.date}</span>
                            <span>{forecast.hour}</span>
                        </div>
                        <div>
                            <span>{forecast.windspeed}</span>
                            <span>{forecast.rain}</span>
                        </div>
                        <p>weather(sunny or rainy)</p>
                        <p>{dailyForecast.city}</p>
                    </div>
                })}
            </section>
        </>
    );
}

export default Daily;
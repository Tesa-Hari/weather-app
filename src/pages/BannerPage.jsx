import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Banner(props) {
    const [weeklyForecast, setWeeklyForecast] = useState(null)
    const baseUrl = "https://weatherapi.adaptable.app";
    const locationId = props.locationId;
    let todayForecast = [];
    const getTodayForecast = () => {
        axios.get(`${baseUrl}/locations/${locationId}?_embed=weekly`)
            .then((response) => {
                setWeeklyForecast(response.data);
                console.log("banner",response)
            })
            .catch((e) => {
                console.log(e)
            });
    };

    useEffect(() => {
        getTodayForecast();
        
    }, [locationId]);
    
    if (weeklyForecast) { todayForecast = weeklyForecast.weekly[0]; }
    return (
        <>
            <div>
                {weeklyForecast === null ? <p>getting forecast</p> : <p></p>}
                {weeklyForecast &&
                    <div className="text-white text-xl bg-purple-500 flex flex-row flex-wrap justify-between sm:flex-nowrap p-6">
                        <div>
                            <p className="text-7xl mt-2 md-2">{weeklyForecast.city}</p>
                            <p className="mt-2 md-2">{todayForecast.date}</p>
                            <div className="flex flex-row mt-2 md-2 flex-wrap justify-start flex-wrap sm:flex-nowrap">
                                <p className="mr-2 ">Sunny : {todayForecast.sunny}%</p>
                                <p className="mr-2 ">Rain : {todayForecast.rain}%</p>
                            </div>
                        </div>
                        <div>
                            today card
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default Banner;
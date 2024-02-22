import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faCloudRain } from '@fortawesome/free-solid-svg-icons'
import PopUp from '../components/PopUp'
import ChangeWeatherImage from "../components/ChangeWeatherimage";

function Banner(props) {
    const [weeklyForecast, setWeeklyForecast] = useState(null)
    const [open, setOpen] = useState(false);
  
    const baseUrl = "https://weatherapi.adaptable.app";
    const locationId = props.locationId;
    let todayForecast = [];
    const getTodayForecast = () => {
        axios.get(`${baseUrl}/locations/${locationId}?_embed=daily`)
            .then((response) => {
                setWeeklyForecast(response.data);
                console.log("banner", response)
            })
            .catch((e) => {
                console.log(e)
            });
    };

    useEffect(() => {
        getTodayForecast();

    }, [locationId]);

    if (weeklyForecast) { todayForecast = weeklyForecast.daily[0]; }
    return (
        <>
            <div className="h-5/6">
                {weeklyForecast === null ? <p>getting forecast</p> : <p></p>}
                {weeklyForecast &&
                    <div className=" h-auto rounded-3xl text-white bg-purple-500 flex flex-row flex-wrap md:justify-evenly justify-center  sm:flex-nowrap p-20">
                        <div className="mt-20">
                            <p className="text-7xl mt-2 md-2">{weeklyForecast.city}</p>
                            <p className="mt-2 md-2 text-center text-3xl">{todayForecast.date}</p>
                            <div className="flex flex-row mt-4 justify-between flex-wrap  text-3xl">
                                <span><FontAwesomeIcon icon={faWind} />Wind: {todayForecast.windspeed}km/h</span>
                                <span className="ml-6"><FontAwesomeIcon icon={faCloudRain} />Rain :{todayForecast.rain}%</span>
                            </div>
                        </div>
                        <div className="m-2 bg-purple-400 h-70 rounded-xl w-52 " onClick={() => setOpen(true)}>
                            <div className="text-center p-4">
                                <span className=" text-white bg-purple-700 p-2 rounded-2xl">Today </span>
                            </div>
                            {/* <img className="ml-6 w-36 h-28" src="/src/assets/images/snowing_136721.png"></img> */}
                            <ChangeWeatherImage data={todayForecast}/>
                            <p className="text-5xl text-purple-600 hover:text-white text-center m-4">{todayForecast.currenttemp}°</p>
                        </div>
                        {open ?<div className="absolute  top-0 bottom-0 right-0 left-0 w-[100vw] h-[100vh] ">
                           <PopUp data={todayForecast} closePopup={() => setOpen(false)} /> 
                        </div> : null}
                    </div>
                }

            </div>
        </>
    )
}

export default Banner;
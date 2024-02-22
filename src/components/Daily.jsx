import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faWind, faCloudRain } from '@fortawesome/free-solid-svg-icons';
import ChangeWeatherImage from "./ChangeWeatherimage";

function Daily(props) {

    const [dailyForecast, setDailyForecast] = useState(null);
    const baseUrl = "https://weatherapi.adaptable.app"
    const locationId = props.locationId;

    function deleteCard(id) {

        // Delete
        axios.delete(`${baseUrl}/daily/${id}`)
            .then(() => {
                axios.get(`${baseUrl}/locations/${locationId}?_embed=daily`)
                    .then((response) => {
                        setDailyForecast(response.data);
                    })
                    .catch((e) => {
                        console.log(e);
                    });

            })
            .catch((e) => {
                console.log("Eror ", e);
            })

    }

    useEffect(() => {
        axios.get(`${baseUrl}/locations/${locationId}?_embed=daily`)
            .then((response) => {
                setDailyForecast(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [locationId]);
   
    return (
        <section className="overflow-x-scroll  w-[100vw] relative text-lg flex flex-row justify-start flex-nowrap sm:overflow-x-hidden sm:flex-nowrap py-1 ">
        {dailyForecast === null && <p>getting the forecst</p>}
                {dailyForecast && dailyForecast.daily.map((forecast, index) => {
                    return <div key={index} className=" mr-16 p-4 bg-gray-100 shrink-0 min-w-60 h-92   text-gray-400 rounded-full  " >
                        <ChangeWeatherImage data={forecast} location={locationId} />
                        <div className="flex flex-row justify-evenly m-2">
                            <span className="bg-purple-500 text-white p-2 rounded-2xl">{forecast.hour}PM</span>
                        </div>
                        <p className="text-5xl text-purple-600 text-center m-2">{forecast.currenttemp}°</p>
                        <div className="flex flex-row justify-evenly">
                            <span><FontAwesomeIcon icon={faWind} /> {forecast.windspeed}km/h</span>
                            <span><FontAwesomeIcon icon={faCloudRain} />{forecast.rain}%</span>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={() => {
                                deleteCard(forecast.id)
                            }}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </div>
                })}
            </section>
     
    );
}

export default Daily;
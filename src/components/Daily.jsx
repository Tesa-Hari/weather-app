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
    console.log(dailyForecast);

    // First five
    let displayTheFirstFive = null;
    if (dailyForecast !== null) {

        displayTheFirstFive = dailyForecast.daily.filter((el, index) => {
            if (index < 5) {
                return true;
            }
            else {
                return false;
            }

        })
    }

    return (
        <>
            <section className="w-full text-lg flex flex-row justify-evenly flex-wrap sm:flex-nowrap py-1 ">
                {dailyForecast === null && <p>getting the forecst</p>}
                {displayTheFirstFive && displayTheFirstFive.map((forecast, index) => {
                    return <div key={index} className="m-2 pt-4 bg-gray-100 h-96 hover:text-white  text-gray-400 rounded-full w-60 bg-gradient-to-t hover:from-purple-600 hover:to-purple-600 " >
                        <ChangeWeatherImage data={forecast} />
                        <div className="flex flex-row justify-evenly m-2">
                            {/* <span className="bg-purple-700 text-white p-2 rounded-2xl">{forecast}</span> */}
                            <span className="bg-purple-500 text-white p-2 rounded-2xl">{forecast.hour}PM</span>
                        </div>
                        <p className="text-5xl text-purple-600 hover:text-white text-center m-2">{forecast.currenttemp}°</p>
                        <div className="flex flex-row justify-evenly">
                            <span><FontAwesomeIcon icon={faWind} /> {forecast.windspeed}km/h</span>
                            <span><FontAwesomeIcon icon={faCloudRain} />{forecast.rain}%</span>
                        </div>
                        <p className="text-center m-2">Sunny</p>

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
        </>
    );
}

export default Daily;
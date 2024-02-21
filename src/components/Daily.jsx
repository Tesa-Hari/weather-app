import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Daily(props) {

    const [dailyForecast, setDailyForecast] = useState(null);
    const baseUrl = "https://weatherapi.adaptable.app"
    const locationId = props.locationId;

    // prevent reload


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
            <section className="w-full text-lg grid grid-cols-5  sm:flex-nowrap py-1 ">
                {dailyForecast === null && <p>getting the forecst</p>}
                {displayTheFirstFive && displayTheFirstFive.map((forecast, index) => {
                    return <div key={index} className="m-5 " >
                        <img></img>
                        <div className="flex flex-row justify-evenly">
                            <span>{forecast.date}</span>
                            <span>{forecast.hour}</span>
                        </div>
                        <div className="flex flex-row justify-evenly">
                            <span>{forecast.windspeed}</span>
                            <span>{forecast.rain}</span>
                        </div>
                        <p className="text-center">Sunny</p>

                        <div className="relative">
                            <button className="absolute bottom-0 right-0" onClick={() => {
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
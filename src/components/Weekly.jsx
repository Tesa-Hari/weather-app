import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ChangeWeatherImage from "./ChangeWeatherimage";

function Weekly(props) {
    const [weeklyForeCast, setWeeklyForecast] = useState(null);
    const baseUrl = "https://weather-api-683l.onrender.com";
    const locationId = props.locationId;
    const navigate = useNavigate();

    // Delete weekly

    function deleteCard(id) {
        axios.delete(`${baseUrl}/weekly/${id}`)
            .then(() => {
                getWeeklyForecast();

            })
            .catch((e) => {
                console.log("Eror ", e);
            })

    }

    const getWeeklyForecast = () => {
        axios.get(`${baseUrl}/locations/${locationId}?_embed=weekly`)
            .then((response) => {
                setWeeklyForecast(response.data);
            })
            .catch((e) => {
                console.log(e)
            });
    };

    useEffect(() => {
        getWeeklyForecast();
    }, [locationId]);
    function UpdateWeekly(weekforecast) {
        navigate('/updateweekly', { state: weekforecast })

    }
    return (
        <>
            <section className="overflow-x-scroll  w-[100vw] relative text-lg flex flex-row justify-start flex-nowrap sm:overflow-x-hidden sm:flex-nowrap py-1 ">
                {weeklyForeCast === null &&
                    <p>getting the forecst</p>}
                {weeklyForeCast && weeklyForeCast.weekly.map((weekforecast, index) => {
                    return <div key={index} className=" mr-16 p-4 bg-gray-100 shrink-0 min-w-60 h-92   text-gray-400 rounded-full ">

                        <ChangeWeatherImage data={weekforecast} location={locationId} />
                        <div className="text-center">
                            <span className=" text-gray-500 p-2 rounded-2xl">{weekforecast.date}</span>
                        </div>

                        <p className="text-5xl text-purple-600  text-center m-4">{weekforecast.currenttemp}°</p>
                        <div className="flex fle-row justify-center">
                            <button className="m-4" onClick={() => {
                                deleteCard(weekforecast.id);
                            }}> <FontAwesomeIcon icon={faTrash} />   </button>
                            <button onClick={() => {
                                UpdateWeekly(weekforecast);
                            }} className="m-4"> <FontAwesomeIcon icon={faEdit} /> </button>
                        </div>
                    </div>
                })}
            </section>
        </>
    )

}

export default Weekly;
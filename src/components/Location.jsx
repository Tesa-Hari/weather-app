import react from "react";
import { useState, useEffect } from "react";
import axios from 'axios'

function Location(props) {


    const [locations, setLocations] = useState(null);
    const baseUrl = "https://weatherapi.adaptable.app"
    const locationValue = "default";


    function getLocation(){
        axios.get(`${baseUrl}/locations`)
        .then(response => {
            setLocations(response.data)
        })
        .catch(e => {
            console.log(e);
        })
    }
    useEffect(() => {
       getLocation();

    },[])

    return (
        <>
            {locations === null && <p>Loading</p>}
            {locations && <div>

                <select defaultValue={locationValue} id="location" onChange={(e) => props.callBackLocation(e.target.value)}
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option disabled value="default">Location</option>
                    {locations.map((location) => {
                        return <option key={location.id} value={location.id}>{location.city}</option>
                    })}

                </select>

            </div>}
        </>
    )

}

export default Location;